import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const UserCreateWithoutPostsInputObjectSchemaBase = z
  .object({
    email: z.string(),
    name: z.string().optional().nullable(),
  })
  .strict();
export const UserCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutPostsInput> =
  UserCreateWithoutPostsInputObjectSchemaBase;
