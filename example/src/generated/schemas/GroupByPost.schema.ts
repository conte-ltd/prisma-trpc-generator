import { z } from 'zod';
import { PostScalarFieldEnumSchema } from './enums';
import {
  PostWhereInputObjectSchema,
  PostOrderByWithAggregationInputObjectSchema,
  PostScalarWhereWithAggregatesInputObjectSchema,
} from './objects';

export const GroupByPostSchema = z
  .object({
    where: z.lazy(() => PostWhereInputObjectSchema).optional(),
    orderBy: z.union([
      z.lazy(() => PostOrderByWithAggregationInputObjectSchema).array(),
      z.lazy(() => PostOrderByWithAggregationInputObjectSchema),
    ]),
    by: PostScalarFieldEnumSchema.array(),
    having: z
      .lazy(() => PostScalarWhereWithAggregatesInputObjectSchema)
      .optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();
