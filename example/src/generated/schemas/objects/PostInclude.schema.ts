import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../index';
import { UserArgsObjectSchema } from './index';

export const PostIncludeObjectSchemaBase = z.object({
  author: z.union([z.lazy(() => UserArgsObjectSchema), z.boolean()]).optional(),
});
export const PostIncludeObjectSchema: z.ZodType<Prisma.PostInclude> =
  PostIncludeObjectSchemaBase;
