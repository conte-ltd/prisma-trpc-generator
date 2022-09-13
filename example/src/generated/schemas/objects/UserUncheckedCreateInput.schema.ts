import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './index';
export const UserUncheckedCreateInputObjectSchemaBase = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
    posts: z
      .lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
  UserUncheckedCreateInputObjectSchemaBase;
