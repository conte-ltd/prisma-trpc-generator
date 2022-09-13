import { z } from 'zod';
import './enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostSelectObjectSchema,
} from './objects';

export const FindUniquePostSchema = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    select: z.lazy(() => PostSelectObjectSchema).optional(),
  })
  .strict();
