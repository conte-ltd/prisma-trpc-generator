import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { UserCreateNestedOneWithoutPostsInputObjectSchema } from './index';
export const PostCreateInputObjectSchemaBase = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional(),
    viewCount: z.number().optional(),
    author: z
      .lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema)
      .optional(),
  })
  .strict();
export const PostCreateInputObjectSchema: z.ZodType<Prisma.PostCreateInput> =
  PostCreateInputObjectSchemaBase;
