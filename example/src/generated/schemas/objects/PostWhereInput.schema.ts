import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import {
  IntFilterObjectSchema,
  DateTimeFilterObjectSchema,
  StringFilterObjectSchema,
  StringNullableFilterObjectSchema,
  BoolFilterObjectSchema,
  UserRelationFilterObjectSchema,
  UserWhereInputObjectSchema,
  IntNullableFilterObjectSchema,
} from './index';
export const PostWhereInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => PostWhereInputObjectSchema),
        z.lazy(() => PostWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PostWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PostWhereInputObjectSchema),
        z.lazy(() => PostWhereInputObjectSchema).array(),
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
    author: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    authorId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();
export const PostWhereInputObjectSchema: z.ZodType<Prisma.PostWhereInput> =
  PostWhereInputObjectSchemaBase;
