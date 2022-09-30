import { t } from "../../trpc";
import { FindUniquePostSchema, FindFirstPostSchema, FindManyPostSchema, CreateOnePostSchema, DeleteOnePostSchema, UpdateOnePostSchema, DeleteManyPostSchema, UpdateManyPostSchema, UpsertOnePostSchema, AggregatePostSchema, GroupByPostSchema } from "../schemas";

const aggregate = t.procedure
  .input(AggregatePostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.aggregate(input);
  });
const createOne = t.procedure
  .input(CreateOnePostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.create(input);
  });
const deleteMany = t.procedure
  .input(DeleteManyPostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.deleteMany(input);
  });
const deleteOne = t.procedure
  .input(DeleteOnePostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.delete(input);
  });
const findFirst = t.procedure
  .input(FindFirstPostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.findFirst(input);
  });
const findMany = t.procedure
  .input(FindManyPostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.findMany(input);
  });
const findUnique = t.procedure
  .input(FindUniquePostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.findUnique(input);
  });
const groupBy = t.procedure
  .input(GroupByPostSchema)
  .query(async ({ ctx, input }) => {
    return ctx.prisma.post.groupBy(input);
  });
const updateMany = t.procedure
  .input(UpdateManyPostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.updateMany(input);
  });
const updateOne = t.procedure
  .input(UpdateOnePostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.update(input);
  });
const upsertOne = t.procedure
  .input(UpsertOnePostSchema)
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.post.upsert(input);
  });

export const postsRouter = t.router({
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
