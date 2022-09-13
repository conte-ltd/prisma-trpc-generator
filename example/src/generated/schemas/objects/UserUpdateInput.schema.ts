import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  StringFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
  PostUpdateManyWithoutAuthorNestedInputObjectSchema,
} from './index';
export const UserUpdateInputObjectSchemaBase = z
  .object({
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    posts: z
      .lazy(() => PostUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
  })
  .strict();
export const UserUpdateInputObjectSchema: z.ZodType<Prisma.UserUpdateInput> =
  UserUpdateInputObjectSchemaBase;
