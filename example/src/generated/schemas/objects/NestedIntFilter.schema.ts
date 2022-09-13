import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const NestedIntFilterObjectSchemaBase = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedIntFilterObjectSchema: z.ZodType<Prisma.NestedIntFilter> =
  NestedIntFilterObjectSchemaBase;
