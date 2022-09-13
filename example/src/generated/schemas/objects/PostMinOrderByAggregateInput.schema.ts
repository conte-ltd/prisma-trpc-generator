import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const PostMinOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    content: SortOrderSchema.optional(),
    published: SortOrderSchema.optional(),
    viewCount: SortOrderSchema.optional(),
    authorId: SortOrderSchema.optional(),
  })
  .strict();
export const PostMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostMinOrderByAggregateInput> =
  PostMinOrderByAggregateInputObjectSchemaBase;
