import type { Context } from './context';
import { initTRPC } from '@trpc/server';

export const t = initTRPC.context<Context>().create();
export const procedure = t.procedure;
