import { z } from 'zod';
import { UserCreateInputObjectSchema } from './objects/UserCreateInput.schema';
import { UserSelectObjectSchema } from './objects/UserSelect.schema';
import { UserIncludeObjectSchema } from './objects/UserInclude.schema';

export const UserCreateOneSchema = z.object({
  data: UserCreateInputObjectSchema,
  select: z.lazy(() => UserSelectObjectSchema).optional(),
  include: z.lazy(() => UserIncludeObjectSchema).optional(),
});
