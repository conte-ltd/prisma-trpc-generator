import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostUpdateWithoutAuthorInputObjectSchema,
  PostUncheckedUpdateWithoutAuthorInputObjectSchema,
} from './index';
export const PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PostUpdateWithoutAuthorInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict();
export const PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput> =
  PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchemaBase;
