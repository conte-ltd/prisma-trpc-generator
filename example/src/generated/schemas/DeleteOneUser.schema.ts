import { z } from 'zod';
import './enums';
import {
  UserWhereUniqueInputObjectSchema,
  UserSelectObjectSchema,
  UserIncludeObjectSchema,
} from './objects';

export const DeleteOneUserSchema = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    select: z.lazy(() => UserSelectObjectSchema).optional(),
    include: z.lazy(() => UserIncludeObjectSchema).optional(),
  })
  .strict();
