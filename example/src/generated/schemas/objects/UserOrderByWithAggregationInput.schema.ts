import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import {
  UserCountOrderByAggregateInputObjectSchema,
  UserAvgOrderByAggregateInputObjectSchema,
  UserMaxOrderByAggregateInputObjectSchema,
  UserMinOrderByAggregateInputObjectSchema,
  UserSumOrderByAggregateInputObjectSchema,
} from './index';
export const UserOrderByWithAggregationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => UserAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => UserSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();
export const UserOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
  UserOrderByWithAggregationInputObjectSchemaBase;
