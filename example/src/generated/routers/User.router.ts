import { createRouter } from "../../router";
import { FindUniqueUserSchema, FindFirstUserSchema, FindManyUserSchema, CreateOneUserSchema, DeleteOneUserSchema, UpdateOneUserSchema, DeleteManyUserSchema, UpdateManyUserSchema, UpsertOneUserSchema, AggregateUserSchema, GroupByUserSchema } from "../schemas";

export const usersRouter = createRouter()

  .query("aggregate", {
    input: AggregateUserSchema,
    async resolve({ ctx, input }) {
      const aggregate = await ctx.prisma.user.aggregate(input);
      return aggregate;
    },
  })

  .mutation("createOne", {
    input: CreateOneUserSchema,
    async resolve({ ctx, input }) {
      const createOne = await ctx.prisma.user.create(input);
      return createOne;
    },
  })

  .mutation("deleteMany", {
    input: DeleteManyUserSchema,
    async resolve({ ctx, input }) {
      const deleteMany = await ctx.prisma.user.deleteMany(input);
      return deleteMany;
    },
  })

  .mutation("deleteOne", {
    input: DeleteOneUserSchema,
    async resolve({ ctx, input }) {
      const deleteOne = await ctx.prisma.user.delete(input);
      return deleteOne;
    },
  })

  .query("findFirst", {
    input: FindFirstUserSchema,
    async resolve({ ctx, input }) {
      const findFirst = await ctx.prisma.user.findFirst(input);
      return findFirst;
    },
  })

  .query("findMany", {
    input: FindManyUserSchema,
    async resolve({ ctx, input }) {
      const findMany = await ctx.prisma.user.findMany(input);
      return findMany;
    },
  })

  .query("findUnique", {
    input: FindUniqueUserSchema,
    async resolve({ ctx, input }) {
      const findUnique = await ctx.prisma.user.findUnique(input);
      return findUnique;
    },
  })

  .query("groupBy", {
    input: GroupByUserSchema,
    async resolve({ ctx, input }) {
      const groupBy = await ctx.prisma.user.groupBy(input);
      return groupBy;
    },
  })

  .mutation("updateMany", {
    input: UpdateManyUserSchema,
    async resolve({ ctx, input }) {
      const updateMany = await ctx.prisma.user.updateMany(input);
      return updateMany;
    },
  })

  .mutation("updateOne", {
    input: UpdateOneUserSchema,
    async resolve({ ctx, input }) {
      const updateOne = await ctx.prisma.user.update(input);
      return updateOne;
    },
  })

  .mutation("upsertOne", {
    input: UpsertOneUserSchema,
    async resolve({ ctx, input }) {
      const upsertOne = await ctx.prisma.user.upsert(input);
      return upsertOne;
    },
  })
