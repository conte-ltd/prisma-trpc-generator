import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const DateTimeFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.date().optional(),
  })
  .strict();
export const DateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  DateTimeFieldUpdateOperationsInputObjectSchemaBase;
