import { z } from 'zod';
import './enums';
import {
  PostWhereInputObjectSchema,
  PostOrderByWithRelationInputObjectSchema,
  PostWhereUniqueInputObjectSchema,
} from './objects';

export const AggregatePostSchema = z
  .object({
    where: z.lazy(() => PostWhereInputObjectSchema).optional(),
    orderBy: z
      .union([
        z.lazy(() => PostOrderByWithRelationInputObjectSchema).array(),
        z.lazy(() => PostOrderByWithRelationInputObjectSchema),
      ])
      .optional(),
    cursor: z.lazy(() => PostWhereUniqueInputObjectSchema).optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();
