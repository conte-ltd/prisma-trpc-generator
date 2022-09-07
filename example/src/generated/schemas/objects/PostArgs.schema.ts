import { z } from 'zod';
import { PostSelectObjectSchema } from './PostSelect.schema';
import { PostIncludeObjectSchema } from './PostInclude.schema';
import type { Prisma } from '@prisma/client';

export const PostArgsObjectSchemaBase = z.object({
  select: z.lazy(() => PostSelectObjectSchema).optional(),
  include: z.lazy(() => PostIncludeObjectSchema).optional(),
});

export const PostArgsObjectSchema: z.ZodType<Prisma.PostArgs> =
  PostArgsObjectSchemaBase;
