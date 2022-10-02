import { z } from 'zod';

export const configSchema = z.object({
  initTRPCPath: z.string().default('../../../src/trpc'),
  initTRPCName: z.string().default('t'),
  procedureName: z.string().default('procedure'),
  schemaPath: z.string().optional(),
  exportRouter: z.enum(['both', 'merged', 'partial']).default('both'),
});

export type Config = z.infer<typeof configSchema>;
