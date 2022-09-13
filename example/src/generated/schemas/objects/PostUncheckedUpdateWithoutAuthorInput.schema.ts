import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  IntFieldUpdateOperationsInputObjectSchema,
  DateTimeFieldUpdateOperationsInputObjectSchema,
  StringFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
  BoolFieldUpdateOperationsInputObjectSchema,
} from './index';
export const PostUncheckedUpdateWithoutAuthorInputObjectSchemaBase = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    content: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    published: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    viewCount: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const PostUncheckedUpdateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutAuthorInput> =
  PostUncheckedUpdateWithoutAuthorInputObjectSchemaBase;
