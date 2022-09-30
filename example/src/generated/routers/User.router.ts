import { t, procedure } from "../../trpc";
import { FindUniqueUserSchema, FindFirstUserSchema, FindManyUserSchema, CreateOneUserSchema, DeleteOneUserSchema, UpdateOneUserSchema, DeleteManyUserSchema, UpdateManyUserSchema, UpsertOneUserSchema, AggregateUserSchema, GroupByUserSchema } from "../schemas";

const aggregate = procedure
  .input(AggregateUserSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.user.aggregate(input);
  });
const createOne = procedure
  .input(CreateOneUserSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.user.create(input);
  });
const deleteMany = procedure
  .input(DeleteManyUserSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.user.deleteMany(input);
  });
const deleteOne = procedure
  .input(DeleteOneUserSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.user.delete(input);
  });
const findFirst = procedure
  .input(FindFirstUserSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.user.findFirst(input);
  });
const findMany = procedure
  .input(FindManyUserSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.user.findMany(input);
  });
const findUnique = procedure
  .input(FindUniqueUserSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.user.findUnique(input);
  });
const groupBy = procedure
  .input(GroupByUserSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.user.groupBy(input);
  });
const updateMany = procedure
  .input(UpdateManyUserSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.user.updateMany(input);
  });
const updateOne = procedure
  .input(UpdateOneUserSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.user.update(input);
  });
const upsertOne = procedure
  .input(UpsertOneUserSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.user.upsert(input);
  });

export const usersRouter = t.router({
  aggregate,
  createOne,
  deleteMany,
  deleteOne,
  findFirst,
  findMany,
  findUnique,
  groupBy,
  updateMany,
  updateOne,
  upsertOne
})
