import { z } from 'zod';

import type { Prisma } from '@prisma/client';

export const DateTimeFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.date().optional(),
  })
  .strict();

export const DateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  DateTimeFieldUpdateOperationsInputObjectSchemaBase;
