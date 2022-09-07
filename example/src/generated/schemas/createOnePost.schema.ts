import { z } from 'zod';
import { PostCreateInputObjectSchema } from './objects/PostCreateInput.schema';
import { PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostIncludeObjectSchema } from './objects/PostInclude.schema';

export const PostCreateOneSchema = z.object({
  data: PostCreateInputObjectSchema,
  select: z.lazy(() => PostSelectObjectSchema).optional(),
  include: z.lazy(() => PostIncludeObjectSchema).optional(),
});
