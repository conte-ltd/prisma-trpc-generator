import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { PostWhereInputObjectSchema } from './index';
export const PostListRelationFilterObjectSchemaBase = z
  .object({
    every: z.lazy(() => PostWhereInputObjectSchema).optional(),
    some: z.lazy(() => PostWhereInputObjectSchema).optional(),
    none: z.lazy(() => PostWhereInputObjectSchema).optional(),
  })
  .strict();
export const PostListRelationFilterObjectSchema: z.ZodType<Prisma.PostListRelationFilter> =
  PostListRelationFilterObjectSchemaBase;
