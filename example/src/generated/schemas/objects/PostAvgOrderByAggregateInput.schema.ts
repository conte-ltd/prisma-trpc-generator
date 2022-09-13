import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const PostAvgOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    viewCount: SortOrderSchema.optional(),
    authorId: SortOrderSchema.optional(),
  })
  .strict();
export const PostAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostAvgOrderByAggregateInput> =
  PostAvgOrderByAggregateInputObjectSchemaBase;
