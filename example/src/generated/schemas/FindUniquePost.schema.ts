import { z } from 'zod';
import './enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostSelectObjectSchema,
  PostIncludeObjectSchema,
} from './objects';

export const FindUniquePostSchema = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    select: z.lazy(() => PostSelectObjectSchema).optional(),
    include: z.lazy(() => PostIncludeObjectSchema).optional(),
  })
  .strict();
