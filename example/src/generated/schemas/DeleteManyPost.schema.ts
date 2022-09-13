import { z } from 'zod';
import './enums';
import { PostWhereInputObjectSchema } from './objects';

export const DeleteManyPostSchema = z
  .object({
    where: z.lazy(() => PostWhereInputObjectSchema).optional(),
  })
  .strict();
