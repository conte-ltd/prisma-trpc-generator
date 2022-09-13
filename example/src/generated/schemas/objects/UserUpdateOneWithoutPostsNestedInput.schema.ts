import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  UserCreateWithoutPostsInputObjectSchema,
  UserUncheckedCreateWithoutPostsInputObjectSchema,
  UserCreateOrConnectWithoutPostsInputObjectSchema,
  UserUpsertWithoutPostsInputObjectSchema,
  UserWhereUniqueInputObjectSchema,
  UserUpdateWithoutPostsInputObjectSchema,
  UserUncheckedUpdateWithoutPostsInputObjectSchema,
} from './index';
export const UserUpdateOneWithoutPostsNestedInputObjectSchemaBase = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPostsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutPostsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPostsInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z.lazy(() => UserUpsertWithoutPostsInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      delete: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPostsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPostsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
]);
export const UserUpdateOneWithoutPostsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutPostsNestedInput> =
  UserUpdateOneWithoutPostsNestedInputObjectSchemaBase;
