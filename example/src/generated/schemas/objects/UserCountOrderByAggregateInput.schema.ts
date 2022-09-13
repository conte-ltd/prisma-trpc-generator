import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from '../enums';
import './index';
export const UserCountOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
  })
  .strict();
export const UserCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> =
  UserCountOrderByAggregateInputObjectSchemaBase;
