import * as trpc from '@trpc/server';
import { Context } from './context';

export const createRouter = () => {
  return trpc.router<Context>();
};

export const baseRouter = createRouter();
