import { z } from 'zod';
import { PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';

export const PostDeleteManySchema = z.object({
  where: PostWhereInputObjectSchema.optional(),
});
