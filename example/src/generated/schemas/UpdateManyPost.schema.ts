import { z } from 'zod';
import './enums';
import {
  PostUpdateManyMutationInputObjectSchema,
  PostUncheckedUpdateManyInputObjectSchema,
  PostWhereInputObjectSchema,
} from './objects';

export const UpdateManyPostSchema = z
  .object({
    data: z.union([
      z.lazy(() => PostUpdateManyMutationInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateManyInputObjectSchema),
    ]),
    where: z.lazy(() => PostWhereInputObjectSchema).optional(),
  })
  .strict();
