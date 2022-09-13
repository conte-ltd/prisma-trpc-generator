import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  UserCreateWithoutPostsInputObjectSchema,
  UserUncheckedCreateWithoutPostsInputObjectSchema,
  UserCreateOrConnectWithoutPostsInputObjectSchema,
  UserWhereUniqueInputObjectSchema,
} from './index';
export const UserCreateNestedOneWithoutPostsInputObjectSchemaBase = z.union([
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
]);
export const UserCreateNestedOneWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPostsInput> =
  UserCreateNestedOneWithoutPostsInputObjectSchemaBase;
