import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostWhereUniqueInputObjectSchema,
  PostCreateWithoutAuthorInputObjectSchema,
  PostUncheckedCreateWithoutAuthorInputObjectSchema,
} from './index';
export const PostCreateOrConnectWithoutAuthorInputObjectSchemaBase = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PostCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict();
export const PostCreateOrConnectWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutAuthorInput> =
  PostCreateOrConnectWithoutAuthorInputObjectSchemaBase;
