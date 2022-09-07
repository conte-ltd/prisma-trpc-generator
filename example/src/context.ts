import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { PrismaClient } from '@prisma/client';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  prisma: new PrismaClient(),
}); // no context

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
