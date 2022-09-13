import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const NestedStringNullableFilterObjectSchemaBase = z
  .object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict();
export const NestedStringNullableFilterObjectSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  NestedStringNullableFilterObjectSchemaBase;
