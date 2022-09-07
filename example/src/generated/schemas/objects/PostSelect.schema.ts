import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import type { Prisma } from '@prisma/client';

export const PostSelectObjectSchemaBase = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  published: z.boolean().optional(),
  viewCount: z.boolean().optional(),
  author: z.union([z.lazy(() => UserArgsObjectSchema), z.boolean()]).optional(),
  authorId: z.boolean().optional(),
});

export const PostSelectObjectSchema: z.ZodType<Prisma.PostSelect> =
  PostSelectObjectSchemaBase;
