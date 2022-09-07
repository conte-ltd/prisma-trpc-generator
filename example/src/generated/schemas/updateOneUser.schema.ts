import { z } from 'zod';
import { UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema';
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserSelectObjectSchema } from './objects/UserSelect.schema';
import { UserIncludeObjectSchema } from './objects/UserInclude.schema';

export const UserUpdateOneSchema = z.object({
  data: UserUpdateInputObjectSchema,
  where: UserWhereUniqueInputObjectSchema,
  select: z.lazy(() => UserSelectObjectSchema).optional(),
  include: z.lazy(() => UserIncludeObjectSchema).optional(),
});
