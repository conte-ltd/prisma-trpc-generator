import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostUpdateWithoutAuthorInputObjectSchema,
  PostUncheckedUpdateWithoutAuthorInputObjectSchema,
  PostCreateWithoutAuthorInputObjectSchema,
  PostUncheckedCreateWithoutAuthorInputObjectSchema,
} from './index';
export const PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PostUpdateWithoutAuthorInputObjectSchema),
      z.lazy(() => PostUncheckedUpdateWithoutAuthorInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PostCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict();
export const PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput> =
  PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchemaBase;
