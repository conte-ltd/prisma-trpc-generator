import { z } from 'zod';
import './enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostSelectObjectSchema,
} from './objects';

export const DeleteOnePostSchema = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    select: z.lazy(() => PostSelectObjectSchema).optional(),
  })
  .strict();
