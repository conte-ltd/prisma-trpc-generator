import { z } from 'zod';

import type { Prisma } from '@prisma/client';

export const NullableStringFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.string().optional().nullable(),
  })
  .strict();

export const NullableStringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  NullableStringFieldUpdateOperationsInputObjectSchemaBase;
