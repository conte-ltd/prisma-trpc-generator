import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const PostOrderByRelationAggregateInputObjectSchemaBase = z
  .object({
    _count: SortOrderSchema.optional(),
  })
  .strict();
export const PostOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PostOrderByRelationAggregateInput> =
  PostOrderByRelationAggregateInputObjectSchemaBase;
