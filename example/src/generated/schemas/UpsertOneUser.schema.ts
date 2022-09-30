import { z } from 'zod';
import './enums';
import {
  UserWhereUniqueInputObjectSchema,
  UserCreateInputObjectSchema,
  UserUncheckedCreateInputObjectSchema,
  UserUpdateInputObjectSchema,
  UserUncheckedUpdateInputObjectSchema,
  UserSelectObjectSchema,
  UserIncludeObjectSchema,
} from './objects';

export const UpsertOneUserSchema = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateInputObjectSchema),
      z.lazy(() => UserUncheckedCreateInputObjectSchema),
    ]),
    update: z.union([
      z.lazy(() => UserUpdateInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateInputObjectSchema),
    ]),
    select: z.lazy(() => UserSelectObjectSchema).optional(),
    include: z.lazy(() => UserIncludeObjectSchema).optional(),
  })
  .strict();
