import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  NestedDateTimeWithAggregatesFilterObjectSchema,
  NestedIntFilterObjectSchema,
  NestedDateTimeFilterObjectSchema,
} from './index';
export const DateTimeWithAggregatesFilterObjectSchemaBase = z
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
export const DateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  DateTimeWithAggregatesFilterObjectSchemaBase;
