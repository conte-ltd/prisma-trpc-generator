import { z } from 'zod';
export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'title',
  'content',
  'published',
  'viewCount',
  'authorId',
]);
