import { z } from 'zod';
import { PostUpdateInputObjectSchema } from './objects/PostUpdateInput.schema';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';
import { PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostIncludeObjectSchema } from './objects/PostInclude.schema';

export const PostUpdateOneSchema = z.object({
  data: PostUpdateInputObjectSchema,
  where: PostWhereUniqueInputObjectSchema,
  select: z.lazy(() => PostSelectObjectSchema).optional(),
  include: z.lazy(() => PostIncludeObjectSchema).optional(),
});
