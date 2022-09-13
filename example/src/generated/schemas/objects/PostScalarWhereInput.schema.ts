import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  IntFilterObjectSchema,
  DateTimeFilterObjectSchema,
  StringFilterObjectSchema,
  StringNullableFilterObjectSchema,
  BoolFilterObjectSchema,
  IntNullableFilterObjectSchema,
} from './index';
export const PostScalarWhereInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => PostScalarWhereInputObjectSchema),
        z.lazy(() => PostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PostScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PostScalarWhereInputObjectSchema),
        z.lazy(() => PostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    published: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    viewCount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    authorId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();
export const PostScalarWhereInputObjectSchema: z.ZodType<Prisma.PostScalarWhereInput> =
  PostScalarWhereInputObjectSchemaBase;
