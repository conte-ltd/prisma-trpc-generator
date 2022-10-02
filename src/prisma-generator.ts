import { EnvValue, GeneratorOptions } from '@prisma/generator-helper';
import { getDMMF, parseEnvValue } from '@prisma/internals';
import { promises as fs } from 'fs';
import path from 'path';
import { configSchema } from './config';
import {
  generateProcedureImport,
  generateProcedure,
  generateRouterImport,
  generateRouterSchemaImports,
  getInputTypeByOpName,
  generateInitTRPCImport,
  generateRouterExport,
} from './helpers';
import { project } from './project';
import removeDir from './utils/removeDir';
import { uncapitalizeFirstLetter } from './utils/uncapitalizeFirstLetter';

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output as EnvValue);
  const results = configSchema.safeParse(options.generator.config);
  if (!results.success) throw new Error('Invalid options passed');
  const config = results.data;

  await fs.mkdir(outputDir, { recursive: true });
  await removeDir(outputDir, true);

  const prismaClientProvider = options.otherGenerators.find(
    (it) => parseEnvValue(it.provider) === 'prisma-client-js',
  );

  const zodOptions = options.otherGenerators.find(
    (it) => parseEnvValue(it.provider) === 'prisma-zod-generator',
  );

  if (!zodOptions) {
    throw new Error('prisma-zod-generator is required.');
  }

  const dataSource = options.datasources?.[0];

  const prismaClientDmmf = await getDMMF({
    datamodel: options.datamodel,
    previewFeatures: prismaClientProvider?.previewFeatures,
  });

  const appRouter = project.createSourceFile(
    path.resolve(outputDir, `index.ts`),
    undefined,
    { overwrite: true },
  );

  if (config.exportRouter === 'both' || config.exportRouter === 'merged') {
    generateInitTRPCImport(appRouter, config);
  }

  const modelRouters: string[] = [];

  prismaClientDmmf.mappings.modelOperations.forEach((modelOperation) => {
    const { model, ...operations } = modelOperation;
    const lowerCamelCaseModel = uncapitalizeFirstLetter(model);
    const hasCreateMany = Boolean(operations.createMany);
    const modelRouter = project.createSourceFile(
      path.resolve(outputDir, `${model}.router.ts`),
      undefined,
      { overwrite: true },
    );

    generateProcedureImport(modelRouter, config);
    generateRouterSchemaImports(
      modelRouter,
      model,
      hasCreateMany,
      dataSource.provider,
      config.schemaPath ?? zodOptions.output!.value,
    );

    for (const [opType, opNameWithModel] of Object.entries(operations)) {
      if (!opNameWithModel) {
        continue;
      }

      const name = opNameWithModel.replace(model as string, '');

      generateProcedure(
        modelRouter,
        name,
        getInputTypeByOpName(opType, model),
        model,
        opType,
        config,
      );
    }

    modelRouter.addStatements(/* ts */ `
    export const ${lowerCamelCaseModel}Router = ${config.initTRPCName}.router({
      ${modelRouter
        .getVariableDeclarations()
        .map((declaretion) => declaretion.getName())
        .join(',\n')}
    })`);

    modelRouter.formatText({ indentSize: 2 });

    modelRouters.push(`${lowerCamelCaseModel}: ${lowerCamelCaseModel}Router`);

    generateRouterImport(appRouter, lowerCamelCaseModel, model);

    if (config.exportRouter === 'both' || config.exportRouter === 'partial') {
      generateRouterExport(appRouter, lowerCamelCaseModel);
    }
  });

  if (config.exportRouter === 'both' || config.exportRouter === 'merged') {
    appRouter.addStatements(/* ts */ `
    export const appRouter = ${config.initTRPCName}.router({
      ${modelRouters.join(',\n')}
    })`);
  }

  appRouter.formatText({ indentSize: 2 });
  await project.save();
}
