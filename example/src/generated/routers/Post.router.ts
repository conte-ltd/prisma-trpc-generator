import { createRouter } from "../../router";
import { FindUniquePostSchema, FindFirstPostSchema, FindManyPostSchema, CreateOnePostSchema, DeleteOnePostSchema, UpdateOnePostSchema, DeleteManyPostSchema, UpdateManyPostSchema, UpsertOnePostSchema, AggregatePostSchema, GroupByPostSchema } from "../schemas";

export const postsRouter = createRouter()

  .query("aggregate", {
    input: AggregatePostSchema,
    async resolve({ ctx, input }) {
      const aggregate = await ctx.prisma.post.aggregate(input);
      return aggregate;
    },
  })

  .mutation("createOne", {
    input: CreateOnePostSchema,
    async resolve({ ctx, input }) {
      const createOne = await ctx.prisma.post.create(input);
      return createOne;
    },
  })

  .mutation("deleteMany", {
    input: DeleteManyPostSchema,
    async resolve({ ctx, input }) {
      const deleteMany = await ctx.prisma.post.deleteMany(input);
      return deleteMany;
    },
  })

  .mutation("deleteOne", {
    input: DeleteOnePostSchema,
    async resolve({ ctx, input }) {
      const deleteOne = await ctx.prisma.post.delete(input);
      return deleteOne;
    },
  })

  .query("findFirst", {
    input: FindFirstPostSchema,
    async resolve({ ctx, input }) {
      const findFirst = await ctx.prisma.post.findFirst(input);
      return findFirst;
    },
  })

  .query("findMany", {
    input: FindManyPostSchema,
    async resolve({ ctx, input }) {
      const findMany = await ctx.prisma.post.findMany(input);
      return findMany;
    },
  })

  .query("findUnique", {
    input: FindUniquePostSchema,
    async resolve({ ctx, input }) {
      const findUnique = await ctx.prisma.post.findUnique(input);
      return findUnique;
    },
  })

  .query("groupBy", {
    input: GroupByPostSchema,
    async resolve({ ctx, input }) {
      const groupBy = await ctx.prisma.post.groupBy(input);
      return groupBy;
    },
  })

  .mutation("updateMany", {
    input: UpdateManyPostSchema,
    async resolve({ ctx, input }) {
      const updateMany = await ctx.prisma.post.updateMany(input);
      return updateMany;
    },
  })

  .mutation("updateOne", {
    input: UpdateOnePostSchema,
    async resolve({ ctx, input }) {
      const updateOne = await ctx.prisma.post.update(input);
      return updateOne;
    },
  })

  .mutation("upsertOne", {
    input: UpsertOnePostSchema,
    async resolve({ ctx, input }) {
      const upsertOne = await ctx.prisma.post.upsert(input);
      return upsertOne;
    },
  })
