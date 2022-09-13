import { z } from 'zod';
import './enums';
import {
  UserWhereUniqueInputObjectSchema,
  UserCreateInputObjectSchema,
  UserUncheckedCreateInputObjectSchema,
  UserUpdateInputObjectSchema,
  UserUncheckedUpdateInputObjectSchema,
  UserSelectObjectSchema,
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
  })
  .strict();
