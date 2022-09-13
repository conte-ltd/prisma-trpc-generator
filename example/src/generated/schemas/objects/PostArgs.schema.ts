import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostSelectObjectSchema, PostIncludeObjectSchema } from './index';

export const PostArgsObjectSchemaBase = z.object({
  select: z.lazy(() => PostSelectObjectSchema).optional(),
  include: z.lazy(() => PostIncludeObjectSchema).optional(),
});
export const PostArgsObjectSchema: z.ZodType<Prisma.PostArgs> =
  PostArgsObjectSchemaBase;
