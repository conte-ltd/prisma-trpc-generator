import { z } from 'zod';
import { PostCreateNestedManyWithoutAuthorInputObjectSchema } from './PostCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

export const UserCreateInputObjectSchemaBase = z
  .object({
    email: z.string(),
    name: z.string().optional().nullable(),
    posts: z
      .lazy(() => PostCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> =
  UserCreateInputObjectSchemaBase;
