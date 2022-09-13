import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostScalarWhereInputObjectSchema,
  PostUpdateManyMutationInputObjectSchema,
  PostUncheckedUpdateManyWithoutPostsInputObjectSchema,
} from './index';
export const PostUpdateManyWithWhereWithoutAuthorInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => PostScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PostUpdateManyMutationInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateManyWithoutPostsInputObjectSchema),
    ]),
  })
  .strict();
export const PostUpdateManyWithWhereWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutAuthorInput> =
  PostUpdateManyWithWhereWithoutAuthorInputObjectSchemaBase;
