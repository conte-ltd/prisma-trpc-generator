import { EnvValue, GeneratorOptions } from '@prisma/generator-helper';
import { getDMMF, parseEnvValue } from '@prisma/internals';
import { promises as fs } from 'fs';
import path from 'path';
import pluralize from 'pluralize';
import { generate as PrismaZodGenerator } from '@conte-ltd/prisma-zod-generator/lib/prisma-generator';
import { configSchema } from './config';
import {
  generateBaseRouterImport,
  generateCreateRouterImport,
  generateProcedure,
  generateRouterImport,
  generateRouterSchemaImports,
  generatetRPCImport,
  getInputTypeByOpName,
} from './helpers';
import { project } from './project';
import removeDir from './utils/removeDir';

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output as EnvValue);
  const results = configSchema.safeParse(options.generator.config);
  if (!results.success) throw new Error('Invalid options passed');
  const config = results.data;

  await fs.mkdir(outputDir, { recursive: true });
  await removeDir(outputDir, true);
  await PrismaZodGenerator(options);

  const prismaClientProvider = options.otherGenerators.find(
    (it) => parseEnvValue(it.provider) === 'prisma-client-js',
  );

  const dataSource = options.datasources?.[0];

  const prismaClientDmmf = await getDMMF({
    datamodel: options.datamodel,
    previewFeatures: prismaClientProvider?.previewFeatures,
  });

  const appRouter = project.createSourceFile(
    path.resolve(outputDir, 'routers', `index.ts`),
    undefined,
    { overwrite: true },
  );

  generateBaseRouterImport(appRouter, config);

  appRouter.addStatements(/* ts */ `
  export const appRouter = ${config.baseRouterName}`);

  prismaClientDmmf.mappings.modelOperations.forEach((modelOperation) => {
    const { model, ...operations } = modelOperation;
    const plural = pluralize(model.toLowerCase());
    const hasCreateMany = Boolean(operations.createMany);
    generateRouterImport(appRouter, plural, model);
    const modelRouter = project.createSourceFile(
      path.resolve(outputDir, 'routers', `${model}.router.ts`),
      undefined,
      { overwrite: true },
    );

    generateCreateRouterImport(modelRouter, config);
    generateRouterSchemaImports(
      modelRouter,
      model,
      hasCreateMany,
      dataSource.provider,
    );

    modelRouter.addStatements(/* ts */ `
    export const ${plural}Router = createRouter()`);
    for (const [opType, opNameWithModel] of Object.entries(operations)) {
      generateProcedure(
        modelRouter,
        opNameWithModel?.replace(model as string, ''),
        getInputTypeByOpName(opType, model),
        model,
        opType,
      );
    }
    modelRouter.formatText({ indentSize: 2 });
    appRouter.addStatements(/* ts */ `
    .merge('${model.toLowerCase()}.', ${plural}Router)`);
  });

  appRouter.formatText({ indentSize: 2 });
  await project.save();
}
