import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  NestedIntFilterObjectSchema,
  NestedBoolFilterObjectSchema,
} from './index';
export const NestedBoolWithAggregatesFilterObjectSchemaBase = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([
        z.boolean(),
        z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
  })
  .strict();
export const NestedBoolWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
  NestedBoolWithAggregatesFilterObjectSchemaBase;
