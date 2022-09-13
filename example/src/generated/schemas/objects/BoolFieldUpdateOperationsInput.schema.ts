import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const BoolFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.boolean().optional(),
  })
  .strict();
export const BoolFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
  BoolFieldUpdateOperationsInputObjectSchemaBase;
