import { z } from 'zod';
import './enums';
import {
  PostUpdateInputObjectSchema,
  PostUncheckedUpdateInputObjectSchema,
  PostWhereUniqueInputObjectSchema,
  PostSelectObjectSchema,
} from './objects';

export const UpdateOnePostSchema = z
  .object({
    data: z.union([
      z.lazy(() => PostUpdateInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateInputObjectSchema),
    ]),
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    select: z.lazy(() => PostSelectObjectSchema).optional(),
  })
  .strict();
