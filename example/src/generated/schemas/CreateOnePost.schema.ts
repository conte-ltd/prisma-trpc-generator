import { z } from 'zod';
import './enums';
import {
  PostCreateInputObjectSchema,
  PostUncheckedCreateInputObjectSchema,
  PostSelectObjectSchema,
  PostIncludeObjectSchema,
} from './objects';

export const CreateOnePostSchema = z
  .object({
    data: z.union([
      z.lazy(() => PostCreateInputObjectSchema),
      z.lazy(() => PostUncheckedCreateInputObjectSchema),
    ]),
    select: z.lazy(() => PostSelectObjectSchema).optional(),
    include: z.lazy(() => PostIncludeObjectSchema).optional(),
  })
  .strict();
