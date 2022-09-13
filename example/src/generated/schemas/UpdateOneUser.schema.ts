import { z } from 'zod';
import './enums';
import {
  UserUpdateInputObjectSchema,
  UserUncheckedUpdateInputObjectSchema,
  UserWhereUniqueInputObjectSchema,
  UserSelectObjectSchema,
} from './objects';

export const UpdateOneUserSchema = z
  .object({
    data: z.union([
      z.lazy(() => UserUpdateInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateInputObjectSchema),
    ]),
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    select: z.lazy(() => UserSelectObjectSchema).optional(),
  })
  .strict();
