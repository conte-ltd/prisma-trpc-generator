import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const PostUncheckedCreateInputObjectSchemaBase = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional(),
    viewCount: z.number().optional(),
    authorId: z.number().optional().nullable(),
  })
  .strict();
export const PostUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateInput> =
  PostUncheckedCreateInputObjectSchemaBase;
