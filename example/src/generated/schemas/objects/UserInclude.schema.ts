import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FindManyPostSchema } from '../index';
import './index';

export const UserIncludeObjectSchemaBase = z.object({
  posts: z.union([z.lazy(() => FindManyPostSchema), z.boolean()]).optional(),
});
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> =
  UserIncludeObjectSchemaBase;
