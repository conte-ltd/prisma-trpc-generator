import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { UserWhereInputObjectSchema } from './index';
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
