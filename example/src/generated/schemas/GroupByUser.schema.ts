import { z } from 'zod';
import { UserScalarFieldEnumSchema } from './enums';
import {
  UserWhereInputObjectSchema,
  UserOrderByWithAggregationInputObjectSchema,
  UserScalarWhereWithAggregatesInputObjectSchema,
} from './objects';

export const GroupByUserSchema = z
  .object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    orderBy: z.union([
      z.lazy(() => UserOrderByWithAggregationInputObjectSchema).array(),
      z.lazy(() => UserOrderByWithAggregationInputObjectSchema),
    ]),
    by: UserScalarFieldEnumSchema.array(),
    having: z
      .lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)
      .optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();
