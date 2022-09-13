import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  NestedIntFilterObjectSchema,
  NestedDateTimeFilterObjectSchema,
} from './index';
export const NestedDateTimeWithAggregatesFilterObjectSchemaBase = z
  .object({
    equals: z.date().optional(),
    in: z.date().array().optional(),
    notIn: z.date().array().optional(),
    lt: z.date().optional(),
    lte: z.date().optional(),
    gt: z.date().optional(),
    gte: z.date().optional(),
    not: z
      .union([
        z.date(),
        z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
  })
  .strict();
export const NestedDateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  NestedDateTimeWithAggregatesFilterObjectSchemaBase;
