import { z } from 'zod';
import { UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';
import { UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema';
import { UserCreateOrConnectWithoutPostsInputObjectSchema } from './UserCreateOrConnectWithoutPostsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

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
