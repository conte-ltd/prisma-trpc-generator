import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const NullableStringFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.string().optional().nullable(),
  })
  .strict();
export const NullableStringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  NullableStringFieldUpdateOperationsInputObjectSchemaBase;
