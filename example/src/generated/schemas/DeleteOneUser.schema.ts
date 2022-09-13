import { z } from 'zod';
import './enums';
import {
  UserWhereUniqueInputObjectSchema,
  UserSelectObjectSchema,
} from './objects';

export const DeleteOneUserSchema = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    select: z.lazy(() => UserSelectObjectSchema).optional(),
  })
  .strict();