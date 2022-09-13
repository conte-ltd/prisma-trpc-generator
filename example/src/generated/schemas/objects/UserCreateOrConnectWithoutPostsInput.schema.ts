import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  UserWhereUniqueInputObjectSchema,
  UserCreateWithoutPostsInputObjectSchema,
  UserUncheckedCreateWithoutPostsInputObjectSchema,
} from './index';
export const UserCreateOrConnectWithoutPostsInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPostsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();
export const UserCreateOrConnectWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPostsInput> =
  UserCreateOrConnectWithoutPostsInputObjectSchemaBase;
