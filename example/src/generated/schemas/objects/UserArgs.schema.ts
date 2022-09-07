import { z } from 'zod';
import { UserSelectObjectSchema } from './UserSelect.schema';
import { UserIncludeObjectSchema } from './UserInclude.schema';
import type { Prisma } from '@prisma/client';

export const UserArgsObjectSchemaBase = z.object({
  select: z.lazy(() => UserSelectObjectSchema).optional(),
  include: z.lazy(() => UserIncludeObjectSchema).optional(),
});

export const UserArgsObjectSchema: z.ZodType<Prisma.UserArgs> =
  UserArgsObjectSchemaBase;
