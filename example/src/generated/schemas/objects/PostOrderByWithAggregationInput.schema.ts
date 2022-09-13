import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import {
  PostCountOrderByAggregateInputObjectSchema,
  PostAvgOrderByAggregateInputObjectSchema,
  PostMaxOrderByAggregateInputObjectSchema,
  PostMinOrderByAggregateInputObjectSchema,
  PostSumOrderByAggregateInputObjectSchema,
} from './index';
export const PostOrderByWithAggregationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    content: SortOrderSchema.optional(),
    published: SortOrderSchema.optional(),
    viewCount: SortOrderSchema.optional(),
    authorId: SortOrderSchema.optional(),
    _count: z.lazy(() => PostCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PostAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PostMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PostMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PostSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();
export const PostOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> =
  PostOrderByWithAggregationInputObjectSchemaBase;
