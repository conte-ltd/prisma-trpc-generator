import { z } from 'zod';
import { PostFindManySchema } from '../findManyPost.schema';
import type { Prisma } from '@prisma/client';

export const UserIncludeObjectSchemaBase = z.object({
  posts: z.union([z.lazy(() => PostFindManySchema), z.boolean()]).optional(),
});

export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> =
  UserIncludeObjectSchemaBase;
