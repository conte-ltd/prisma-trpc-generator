import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

export const UserRelationFilterObjectSchemaBase = z
  .object({
    is: z
      .lazy(() => UserWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => UserWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const UserRelationFilterObjectSchema: z.ZodType<Prisma.UserRelationFilter> =
  UserRelationFilterObjectSchemaBase;
