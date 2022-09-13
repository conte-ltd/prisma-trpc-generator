import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const UserUncheckedCreateWithoutPostsInputObjectSchemaBase = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    name: z.string().optional().nullable(),
  })
  .strict();
export const UserUncheckedCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> =
  UserUncheckedCreateWithoutPostsInputObjectSchemaBase;
