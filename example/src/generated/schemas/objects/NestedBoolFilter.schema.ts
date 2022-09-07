import { z } from 'zod';

import type { Prisma } from '@prisma/client';

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
