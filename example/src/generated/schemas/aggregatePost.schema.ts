import { z } from 'zod';
import { PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';
import { PostOrderByWithRelationInputObjectSchema } from './objects/PostOrderByWithRelationInput.schema';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';

export const PostAggregateSchema = z.object({
  where: PostWhereInputObjectSchema.optional(),
  orderBy: PostOrderByWithRelationInputObjectSchema.optional(),
  cursor: PostWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
