import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const UserAvgOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
  })
  .strict();
export const UserAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> =
  UserAvgOrderByAggregateInputObjectSchemaBase;
