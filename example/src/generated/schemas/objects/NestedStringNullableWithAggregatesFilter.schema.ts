import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  NestedIntNullableFilterObjectSchema,
  NestedStringNullableFilterObjectSchema,
} from './index';
export const NestedStringNullableWithAggregatesFilterObjectSchemaBase = z
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
      .union([
        z.string(),
        z.lazy(() => NestedStringNullableWithAggregatesFilterObjectSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  })
  .strict();
export const NestedStringNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
  NestedStringNullableWithAggregatesFilterObjectSchemaBase;
