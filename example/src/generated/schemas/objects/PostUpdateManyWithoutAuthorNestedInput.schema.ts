import { z } from 'zod';
import { PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';
import { PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema';
import { PostCreateOrConnectWithoutAuthorInputObjectSchema } from './PostCreateOrConnectWithoutAuthorInput.schema';
import { PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { PostUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './PostUpdateManyWithWhereWithoutAuthorInput.schema';
import { PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

export const PostUpdateManyWithoutAuthorNestedInputObjectSchemaBase = z.union([
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
          z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema),
          z
            .lazy(() => PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema)
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
          z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema),
          z
            .lazy(() => PostUpdateWithWhereUniqueWithoutAuthorInputObjectSchema)
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

export const PostUpdateManyWithoutAuthorNestedInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithoutAuthorNestedInput> =
  PostUpdateManyWithoutAuthorNestedInputObjectSchemaBase;
