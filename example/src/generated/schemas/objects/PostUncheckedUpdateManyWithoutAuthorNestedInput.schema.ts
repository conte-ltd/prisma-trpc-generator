import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  PostCreateWithoutAuthorInputObjectSchema,
  PostUncheckedCreateWithoutAuthorInputObjectSchema,
  PostCreateOrConnectWithoutAuthorInputObjectSchema,
  PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
  PostWhereUniqueInputObjectSchema,
  PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
  PostUpdateManyWithWhereWithoutAuthorInputObjectSchema,
  PostScalarWhereInputObjectSchema,
} from './index';
export const PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchemaBase =
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
        upsert: z
          .union([
            z.lazy(
              () => PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
            ),
            z
              .lazy(
                () => PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => PostWhereUniqueInputObjectSchema),
            z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => PostWhereUniqueInputObjectSchema),
            z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => PostWhereUniqueInputObjectSchema),
            z.lazy(() => PostWhereUniqueInputObjectSchema).array(),
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
            ),
            z
              .lazy(
                () => PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(() => PostUpdateManyWithWhereWithoutAuthorInputObjectSchema),
            z
              .lazy(() => PostUpdateManyWithWhereWithoutAuthorInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => PostScalarWhereInputObjectSchema),
            z.lazy(() => PostScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);
export const PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutAuthorNestedInput> =
  PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchemaBase;
