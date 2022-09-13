import { z } from 'zod';
import './enums';
import {
  UserWhereInputObjectSchema,
  UserOrderByWithRelationInputObjectSchema,
  UserWhereUniqueInputObjectSchema,
} from './objects';

export const AggregateUserSchema = z
  .object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    orderBy: z
      .union([
        z.lazy(() => UserOrderByWithRelationInputObjectSchema).array(),
        z.lazy(() => UserOrderByWithRelationInputObjectSchema),
      ])
      .optional(),
    cursor: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();
