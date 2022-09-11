import { z } from 'zod';

import type { Prisma } from '@prisma/client';

export const StringFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.string().optional(),
  })
  .strict();

export const StringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  StringFieldUpdateOperationsInputObjectSchemaBase;