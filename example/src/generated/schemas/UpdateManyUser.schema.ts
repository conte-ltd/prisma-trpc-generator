import { z } from 'zod';
import './enums';
import {
  UserUpdateManyMutationInputObjectSchema,
  UserUncheckedUpdateManyInputObjectSchema,
  UserWhereInputObjectSchema,
} from './objects';

export const UpdateManyUserSchema = z
  .object({
    data: z.union([
      z.lazy(() => UserUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateManyInputObjectSchema),
    ]),
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  })
  .strict();
