import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { NestedIntNullableFilterObjectSchema } from './index';
export const IntNullableFilterObjectSchemaBase = z
  .object({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict();
export const IntNullableFilterObjectSchema: z.ZodType<Prisma.IntNullableFilter> =
  IntNullableFilterObjectSchemaBase;
