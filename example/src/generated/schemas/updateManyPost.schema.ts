import { z } from 'zod';
import { PostUpdateManyMutationInputObjectSchema } from './objects/PostUpdateManyMutationInput.schema';
import { PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';

export const PostUpdateManySchema = z.object({
  data: PostUpdateManyMutationInputObjectSchema,
  where: PostWhereInputObjectSchema.optional(),
});
