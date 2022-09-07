import { rule, shield } from 'trpc-shield';

const isAllow = rule()(async (ctx, type, path, rawInput) => {
  return true;
});

export const permissions = shield({
  query: {
    findUnique: isAllow,
    findMany: isAllow,
    findFirst: isAllow,
  },
  mutation: {
    create: isAllow,
    update: isAllow,
    delete: isAllow,
  },
});
