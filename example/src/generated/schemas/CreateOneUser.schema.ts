import { z } from 'zod';
import './enums';
import {
  UserCreateInputObjectSchema,
  UserUncheckedCreateInputObjectSchema,
  UserSelectObjectSchema,
} from './objects';

export const CreateOneUserSchema = z
  .object({
    data: z.union([
      z.lazy(() => UserCreateInputObjectSchema),
      z.lazy(() => UserUncheckedCreateInputObjectSchema),
    ]),
    select: z.lazy(() => UserSelectObjectSchema).optional(),
  })
  .strict();
