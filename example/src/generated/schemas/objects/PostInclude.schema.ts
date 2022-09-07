import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import type { Prisma } from '@prisma/client';

export const PostIncludeObjectSchemaBase = z.object({
  author: z.union([z.lazy(() => UserArgsObjectSchema), z.boolean()]).optional(),
});

export const PostIncludeObjectSchema: z.ZodType<Prisma.PostInclude> =
  PostIncludeObjectSchemaBase;
