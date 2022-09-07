import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

export const PostOrderByRelationAggregateInputObjectSchemaBase = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PostOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PostOrderByRelationAggregateInput> =
  PostOrderByRelationAggregateInputObjectSchemaBase;
