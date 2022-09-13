import { z } from 'zod';
import './enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostCreateInputObjectSchema,
  PostUncheckedCreateInputObjectSchema,
  PostUpdateInputObjectSchema,
  PostUncheckedUpdateInputObjectSchema,
  PostSelectObjectSchema,
} from './objects';

export const UpsertOnePostSchema = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PostCreateInputObjectSchema),
      z.lazy(() => PostUncheckedCreateInputObjectSchema),
    ]),
    update: z.union([
      z.lazy(() => PostUpdateInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateInputObjectSchema),
    ]),
    select: z.lazy(() => PostSelectObjectSchema).optional(),
  })
  .strict();
