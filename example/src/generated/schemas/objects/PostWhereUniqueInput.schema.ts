import { z } from 'zod';

import type { Prisma } from '@prisma/client';

export const PostWhereUniqueInputObjectSchemaBase = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const PostWhereUniqueInputObjectSchema: z.ZodType<Prisma.PostWhereUniqueInput> =
  PostWhereUniqueInputObjectSchemaBase;
