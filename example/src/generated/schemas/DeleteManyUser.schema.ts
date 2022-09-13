import { z } from 'zod';
import './enums';
import { UserWhereInputObjectSchema } from './objects';

export const DeleteManyUserSchema = z
  .object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  })
  .strict();
