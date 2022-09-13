import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import '../enums';
import './index';
export const PostWhereUniqueInputObjectSchemaBase = z
  .object({
    id: z.number().optional(),
  })
  .strict();
export const PostWhereUniqueInputObjectSchema: z.ZodType<Prisma.PostWhereUniqueInput> =
  PostWhereUniqueInputObjectSchemaBase;
