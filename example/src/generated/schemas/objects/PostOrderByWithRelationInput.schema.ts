import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import { UserOrderByWithRelationInputObjectSchema } from './index';
export const PostOrderByWithRelationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    content: SortOrderSchema.optional(),
    published: SortOrderSchema.optional(),
    viewCount: SortOrderSchema.optional(),
    author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    authorId: SortOrderSchema.optional(),
  })
  .strict();
export const PostOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> =
  PostOrderByWithRelationInputObjectSchemaBase;
