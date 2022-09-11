import { SourceFile } from 'ts-morph';
import { Config } from './config';
import { uncapitalizeFirstLetter } from './utils/uncapitalizeFirstLetter';

export const generateCreateRouterImport = (
  sourceFile: SourceFile,
  config: Config,
) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: config.baseRouterPath,
    namedImports: ['createRouter'],
  });
};

export const generatetRPCImport = (sourceFile: SourceFile) => {
  sourceFile.addImportDeclaration({
    moduleSpecifier: '@trpc/server',
    namespaceImport: 'trpc',
  });
};

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

export function generateBaseRouterImport(
  sourceFile: SourceFile,
  config: Config,
) {
  sourceFile.addImportDeclaration({
    moduleSpecifier: config.baseRouterPath,
    namedImports: [config.baseRouterName],
  });
}

export function generateProcedure(
  sourceFile: SourceFile,
  name: string | undefined,
  typeName: string | undefined,
  modelName: string,
  opType: string,
) {
  sourceFile.addStatements(/* ts */ `
  .${getProcedureTypeByOpName(opType)}("${name}", {
    input: ${typeName},
    async resolve({ ctx, input }) {
      const ${name} = await ctx.prisma.${uncapitalizeFirstLetter(
    modelName,
  )}.${opType.replace('One', '')}(input);
      return ${name};
    },
  })`);
}

export function generateRouterSchemaImports(
  sourceFile: SourceFile,
  name: string,
  hasCreateMany: boolean,
  provider: string,
) {
  let statements = [
    `import { ${name}FindUniqueSchema } from "../schemas/findUnique${name}.schema";`,
    `import { ${name}FindFirstSchema } from "../schemas/findFirst${name}.schema";`,
    `import { ${name}FindManySchema } from "../schemas/findMany${name}.schema";`,
    `import { ${name}CreateOneSchema } from "../schemas/createOne${name}.schema";`,
  ];

  if (hasCreateMany) {
    statements.push(
      `import { ${name}CreateManySchema } from "../schemas/createMany${name}.schema";`,
    );
  }

  statements = statements.concat([
    `import { ${name}DeleteOneSchema } from "../schemas/deleteOne${name}.schema";`,
    `import { ${name}UpdateOneSchema } from "../schemas/updateOne${name}.schema";`,
    `import { ${name}DeleteManySchema } from "../schemas/deleteMany${name}.schema";`,
    `import { ${name}UpdateManySchema } from "../schemas/updateMany${name}.schema";`,
    `import { ${name}UpsertSchema } from "../schemas/upsertOne${name}.schema";`,
    `import { ${name}AggregateSchema } from "../schemas/aggregate${name}.schema";`,
    `import { ${name}GroupBySchema } from "../schemas/groupBy${name}.schema";`,
  ]);

  if (provider === 'mongodb') {
    statements = statements.concat([
      `import { ${name}FindRawObjectSchema } from "../schemas/objects/${name}FindRaw.schema";`,
      `import { ${name}AggregateRawObjectSchema } from "../schemas/objects/${name}AggregateRaw.schema";`,
    ]);
  }

  sourceFile.addStatements(/* ts */ statements.join('\n'));
}

export const getInputTypeByOpName = (opName: string, modelName: string) => {
  let inputType;
  switch (opName) {
    case 'findUnique':
      inputType = `${modelName}FindUniqueSchema`;
      break;
    case 'findFirst':
      inputType = `${modelName}FindFirstSchema`;
      break;
    case 'findMany':
      inputType = `${modelName}FindManySchema`;
      break;
    case 'findRaw':
      inputType = `${modelName}FindRawObjectSchema`;
      break;
    case 'createOne':
      inputType = `${modelName}CreateOneSchema`;
      break;
    case 'createMany':
      inputType = `${modelName}CreateManySchema`;
      break;
    case 'deleteOne':
      inputType = `${modelName}DeleteOneSchema`;
      break;
    case 'updateOne':
      inputType = `${modelName}UpdateOneSchema`;
      break;
    case 'deleteMany':
      inputType = `${modelName}DeleteManySchema`;
      break;
    case 'updateMany':
      inputType = `${modelName}UpdateManySchema`;
      break;
    case 'upsertOne':
      inputType = `${modelName}UpsertSchema`;
      break;
    case 'aggregate':
      inputType = `${modelName}AggregateSchema`;
      break;
    case 'aggregateRaw':
      inputType = `${modelName}AggregateRawObjectSchema`;
      break;
    case 'groupBy':
      inputType = `${modelName}GroupBySchema`;
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
