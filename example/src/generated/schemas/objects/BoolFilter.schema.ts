import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import { NestedBoolFilterObjectSchema } from './index';
export const BoolFilterObjectSchemaBase = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const BoolFilterObjectSchema: z.ZodType<Prisma.BoolFilter> =
  BoolFilterObjectSchemaBase;
