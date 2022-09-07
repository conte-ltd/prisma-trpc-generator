import { z } from 'zod';
import { PostWhereInputObjectSchema } from './PostWhereInput.schema';

import type { Prisma } from '@prisma/client';

export const PostListRelationFilterObjectSchemaBase = z
  .object({
    every: z.lazy(() => PostWhereInputObjectSchema).optional(),
    some: z.lazy(() => PostWhereInputObjectSchema).optional(),
    none: z.lazy(() => PostWhereInputObjectSchema).optional(),
  })
  .strict();

export const PostListRelationFilterObjectSchema: z.ZodType<Prisma.PostListRelationFilter> =
  PostListRelationFilterObjectSchemaBase;
