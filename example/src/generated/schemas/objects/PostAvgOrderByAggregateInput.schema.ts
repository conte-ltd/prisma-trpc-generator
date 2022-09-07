import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

export const PostAvgOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    viewCount: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PostAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostAvgOrderByAggregateInput> =
  PostAvgOrderByAggregateInputObjectSchemaBase;
