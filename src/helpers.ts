import { SourceFile, VariableDeclarationKind } from 'ts-morph';
import { Config } from './config';
import { uncapitalizeFirstLetter } from './utils/uncapitalizeFirstLetter';

export const generateRouterImport = (
  sourceFile: SourceFile,
  modelNamePlural: string,
  modelNameCamelCase: string,
) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: `./${modelNameCamelCase}.router`,
    namedImports: [`${modelNamePlural}Router`],
  });
};

export function generateTrpcImport(sourceFile: SourceFile, config: Config) {
  sourceFile.addImportDeclaration({
    moduleSpecifier: config.initTRPCPath,
    namedImports: [config.initTRPCName],
  });
}

export function generateProcedure(
  sourceFile: SourceFile,
  name: string,
  typeName: string | undefined,
  modelName: string,
  opType: string,
  config: Config,
) {
  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name,
        /* ts */
        initializer: `${config.initTRPCName}.procedure
  .input(${typeName})
  .${getProcedureTypeByOpName(opType)}(async ({ ctx, input }) => {
      return ctx.prisma.${uncapitalizeFirstLetter(modelName)}.${opType.replace(
          'One',
          '',
        )}(input);
    })`,
      },
    ],
  });
}

export function generateRouterSchemaImports(
  sourceFile: SourceFile,
  name: string,
  hasCreateMany: boolean,
  provider: string,
  schemaPath: string,
) {
  let imports = [
    `FindUnique${name}Schema`,
    `FindFirst${name}Schema`,
    `FindMany${name}Schema`,
    `CreateOne${name}Schema`,
  ];

  if (hasCreateMany) {
    imports.push(`CreateMany${name}Schema`);
  }

  imports = imports.concat([
    `DeleteOne${name}Schema`,
    `UpdateOne${name}Schema`,
    `DeleteMany${name}Schema`,
    `UpdateMany${name}Schema`,
    `UpsertOne${name}Schema`,
    `Aggregate${name}Schema`,
    `GroupBy${name}Schema`,
  ]);

  if (provider === 'mongodb') {
    imports = imports.concat([
      `FindRawObject${name}Schema`,
      `AggregateRawObject${name}Schema`,
    ]);
  }

  sourceFile
    .addImportDeclaration({
      moduleSpecifier: schemaPath,
    })
    .addNamedImports(imports);
}

export const getInputTypeByOpName = (opName: string, modelName: string) => {
  let inputType;
  switch (opName) {
    case 'findUnique':
      inputType = `FindUnique${modelName}Schema`;
      break;
    case 'findFirst':
      inputType = `FindFirst${modelName}Schema`;
      break;
    case 'findMany':
      inputType = `FindMany${modelName}Schema`;
      break;
    case 'findRaw':
      inputType = `FindRawObject${modelName}Schema`;
      break;
    case 'createOne':
      inputType = `CreateOne${modelName}Schema`;
      break;
    case 'createMany':
      inputType = `CreateMany${modelName}Schema`;
      break;
    case 'deleteOne':
      inputType = `DeleteOne${modelName}Schema`;
      break;
    case 'updateOne':
      inputType = `UpdateOne${modelName}Schema`;
      break;
    case 'deleteMany':
      inputType = `DeleteMany${modelName}Schema`;
      break;
    case 'updateMany':
      inputType = `UpdateMany${modelName}Schema`;
      break;
    case 'upsertOne':
      inputType = `UpsertOne${modelName}Schema`;
      break;
    case 'aggregate':
      inputType = `Aggregate${modelName}Schema`;
      break;
    case 'aggregateRaw':
      inputType = `AggregateRawObject${modelName}Schema`;
      break;
    case 'groupBy':
      inputType = `GroupBy${modelName}Schema`;
      break;
    default:
      console.log('getInputTypeByOpName: ', { opName, modelName });
  }
  return inputType;
};

export const getProcedureTypeByOpName = (opName: string) => {
  let procType;
  switch (opName) {
    case 'findUnique':
    case 'findFirst':
    case 'findMany':
    case 'findRaw':
    case 'aggregate':
    case 'aggregateRaw':
    case 'groupBy':
      procType = 'query';
      break;
    case 'createOne':
    case 'createMany':
    case 'deleteOne':
    case 'updateOne':
    case 'deleteMany':
    case 'updateMany':
    case 'upsertOne':
      procType = 'mutation';
      break;
    default:
      console.log('getProcedureTypeByOpName: ', { opName });
  }
  return procType;
};
