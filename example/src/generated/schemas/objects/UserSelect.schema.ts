import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FindManyPostSchema } from '../index';
import './index';

export const UserSelectObjectSchemaBase = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  posts: z.union([z.lazy(() => FindManyPostSchema), z.boolean()]).optional(),
});
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> =
  UserSelectObjectSchemaBase;
