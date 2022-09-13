import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const NestedBoolFilterObjectSchemaBase = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedBoolFilterObjectSchema: z.ZodType<Prisma.NestedBoolFilter> =
  NestedBoolFilterObjectSchemaBase;
