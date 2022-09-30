import { z } from 'zod';
import './enums';
import {
  UserUpdateInputObjectSchema,
  UserUncheckedUpdateInputObjectSchema,
  UserWhereUniqueInputObjectSchema,
  UserSelectObjectSchema,
  UserIncludeObjectSchema,
} from './objects';

export const UpdateOneUserSchema = z
  .object({
    data: z.union([
      z.lazy(() => UserUpdateInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateInputObjectSchema),
    ]),
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    select: z.lazy(() => UserSelectObjectSchema).optional(),
    include: z.lazy(() => UserIncludeObjectSchema).optional(),
  })
  .strict();
