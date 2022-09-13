import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const StringFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.string().optional(),
  })
  .strict();
export const StringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  StringFieldUpdateOperationsInputObjectSchemaBase;
