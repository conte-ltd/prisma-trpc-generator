import { t, procedure } from "../../trpc";
import { FindUniquePostSchema, FindFirstPostSchema, FindManyPostSchema, CreateOnePostSchema, DeleteOnePostSchema, UpdateOnePostSchema, DeleteManyPostSchema, UpdateManyPostSchema, UpsertOnePostSchema, AggregatePostSchema, GroupByPostSchema } from "../schemas";

const aggregate = procedure
  .input(AggregatePostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.aggregate(input);
  });
const createOne = procedure
  .input(CreateOnePostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.create(input);
  });
const deleteMany = procedure
  .input(DeleteManyPostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.deleteMany(input);
  });
const deleteOne = procedure
  .input(DeleteOnePostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.delete(input);
  });
const findFirst = procedure
  .input(FindFirstPostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.findFirst(input);
  });
const findMany = procedure
  .input(FindManyPostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.findMany(input);
  });
const findUnique = procedure
  .input(FindUniquePostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.findUnique(input);
  });
const groupBy = procedure
  .input(GroupByPostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.groupBy(input);
  });
const updateMany = procedure
  .input(UpdateManyPostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.updateMany(input);
  });
const updateOne = procedure
  .input(UpdateOnePostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.update(input);
  });
const upsertOne = procedure
  .input(UpsertOnePostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.upsert(input);
  });

export const postRouter = t.router({
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
