import { z } from 'zod';

const configBoolean = z
  .enum(['true', 'false'])
  .transform((arg) => JSON.parse(arg));

export const configSchema = z.object({
  baseRouterPath: z.string().default('../../../src/router'),
  baseRouterName: z.string().default('baseRouter'),
  createRouterName: z.string().default('createRouter'),
});

export type Config = z.infer<typeof configSchema>;
