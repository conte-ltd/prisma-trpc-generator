import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';
import { PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

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
