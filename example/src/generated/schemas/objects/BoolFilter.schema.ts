import { z } from 'zod';
import { NestedBoolFilterObjectSchema } from './NestedBoolFilter.schema';

import type { Prisma } from '@prisma/client';

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
