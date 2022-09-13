import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const NestedStringFilterObjectSchemaBase = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedStringFilterObjectSchema: z.ZodType<Prisma.NestedStringFilter> =
  NestedStringFilterObjectSchemaBase;
