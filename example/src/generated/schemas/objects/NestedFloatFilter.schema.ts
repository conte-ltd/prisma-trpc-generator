import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const NestedFloatFilterObjectSchemaBase = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedFloatFilterObjectSchema: z.ZodType<Prisma.NestedFloatFilter> =
  NestedFloatFilterObjectSchemaBase;
