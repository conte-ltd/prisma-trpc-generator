import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserSelectObjectSchema, UserIncludeObjectSchema } from './index';

export const UserArgsObjectSchemaBase = z.object({
  select: z.lazy(() => UserSelectObjectSchema).optional(),
  include: z.lazy(() => UserIncludeObjectSchema).optional(),
});
export const UserArgsObjectSchema: z.ZodType<Prisma.UserArgs> =
  UserArgsObjectSchemaBase;
