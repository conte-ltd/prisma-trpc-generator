import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';
import { PostCreateInputObjectSchema } from './objects/PostCreateInput.schema';
import { PostUpdateInputObjectSchema } from './objects/PostUpdateInput.schema';
import { PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostIncludeObjectSchema } from './objects/PostInclude.schema';

export const PostUpsertSchema = z.object({
  where: PostWhereUniqueInputObjectSchema,
  create: PostCreateInputObjectSchema,
  update: PostUpdateInputObjectSchema,
  select: z.lazy(() => PostSelectObjectSchema).optional(),
  include: z.lazy(() => PostIncludeObjectSchema).optional(),
});
