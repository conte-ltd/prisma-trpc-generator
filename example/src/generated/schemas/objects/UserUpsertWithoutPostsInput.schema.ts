import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  UserUpdateWithoutPostsInputObjectSchema,
  UserUncheckedUpdateWithoutPostsInputObjectSchema,
  UserCreateWithoutPostsInputObjectSchema,
  UserUncheckedCreateWithoutPostsInputObjectSchema,
} from './index';
export const UserUpsertWithoutPostsInputObjectSchemaBase = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPostsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPostsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPostsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();
export const UserUpsertWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPostsInput> =
  UserUpsertWithoutPostsInputObjectSchemaBase;
