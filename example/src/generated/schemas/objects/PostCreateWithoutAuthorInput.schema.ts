import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const PostCreateWithoutAuthorInputObjectSchemaBase = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional(),
    viewCount: z.number().optional(),
  })
  .strict();
export const PostCreateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostCreateWithoutAuthorInput> =
  PostCreateWithoutAuthorInputObjectSchemaBase;
