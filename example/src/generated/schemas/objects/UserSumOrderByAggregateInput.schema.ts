import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const UserSumOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
  })
  .strict();
export const UserSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> =
  UserSumOrderByAggregateInputObjectSchemaBase;
