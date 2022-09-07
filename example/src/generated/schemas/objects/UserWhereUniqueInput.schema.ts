import { z } from 'zod';

import type { Prisma } from '@prisma/client';

export const UserWhereUniqueInputObjectSchemaBase = z
  .object({
    id: z.number().optional(),
    email: z.string().optional(),
  })
  .strict();

export const UserWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  UserWhereUniqueInputObjectSchemaBase;
