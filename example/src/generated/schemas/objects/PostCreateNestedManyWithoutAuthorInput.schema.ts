import { z } from 'zod';
import { PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';
import { PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema';
import { PostCreateOrConnectWithoutAuthorInputObjectSchema } from './PostCreateOrConnectWithoutAuthorInput.schema';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

export const PostCreateNestedManyWithoutAuthorInputObjectSchemaBase = z.union([
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

export const PostCreateNestedManyWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutAuthorInput> =
  PostCreateNestedManyWithoutAuthorInputObjectSchemaBase;
