import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostCreateWithoutAuthorInputObjectSchema,
  PostUncheckedCreateWithoutAuthorInputObjectSchema,
  PostCreateOrConnectWithoutAuthorInputObjectSchema,
  PostWhereUniqueInputObjectSchema,
} from './index';
export const PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchemaBase =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => PostCreateWithoutAuthorInputObjectSchema),
            z.lazy(() => PostCreateWithoutAuthorInputObjectSchema).array(),
            z.lazy(() => PostUncheckedCreateWithoutAuthorInputObjectSchema),
            z
              .lazy(() => PostUncheckedCreateWithoutAuthorInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => PostCreateOrConnectWithoutAuthorInputObjectSchema),
            z
              .lazy(() => PostCreateOrConnectWithoutAuthorInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => PostWhereUniqueInputObjectSchema),
            z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);
export const PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput> =
  PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchemaBase;
