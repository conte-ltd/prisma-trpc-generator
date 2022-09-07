import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPostsInputObjectSchema } from './UserCreateWithoutPostsInput.schema';
import { UserUncheckedCreateWithoutPostsInputObjectSchema } from './UserUncheckedCreateWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

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
