import { z } from 'zod';

export const configSchema = z.object({
  baseRouterPath: z.string().default('../../../src/router'),
  baseRouterName: z.string().default('baseRouter'),
  createRouterName: z.string().default('createRouter'),
  schemaPath: z.string().optional()
});

export type Config = z.infer<typeof configSchema>;
