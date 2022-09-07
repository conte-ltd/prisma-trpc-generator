import { z } from 'zod';

import type { Prisma } from '@prisma/client';

export const BoolFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.boolean().optional(),
  })
  .strict();

export const BoolFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
  BoolFieldUpdateOperationsInputObjectSchemaBase;
