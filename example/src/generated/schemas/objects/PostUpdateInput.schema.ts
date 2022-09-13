import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  DateTimeFieldUpdateOperationsInputObjectSchema,
  StringFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
  BoolFieldUpdateOperationsInputObjectSchema,
  IntFieldUpdateOperationsInputObjectSchema,
  UserUpdateOneWithoutPostsNestedInputObjectSchema,
} from './index';
export const PostUpdateInputObjectSchemaBase = z
  .object({
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
    author: z
      .lazy(() => UserUpdateOneWithoutPostsNestedInputObjectSchema)
      .optional(),
  })
  .strict();
export const PostUpdateInputObjectSchema: z.ZodType<Prisma.PostUpdateInput> =
  PostUpdateInputObjectSchemaBase;
