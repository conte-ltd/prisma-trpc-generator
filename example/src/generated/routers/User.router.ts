import { createRouter } from "../../router";
import { UserFindUniqueSchema } from "../schemas/findUniqueUser.schema";
import { UserFindFirstSchema } from "../schemas/findFirstUser.schema";
import { UserFindManySchema } from "../schemas/findManyUser.schema";
import { UserCreateOneSchema } from "../schemas/createOneUser.schema";
import { UserDeleteOneSchema } from "../schemas/deleteOneUser.schema";
import { UserUpdateOneSchema } from "../schemas/updateOneUser.schema";
import { UserDeleteManySchema } from "../schemas/deleteManyUser.schema";
import { UserUpdateManySchema } from "../schemas/updateManyUser.schema";
import { UserUpsertSchema } from "../schemas/upsertOneUser.schema";
import { UserAggregateSchema } from "../schemas/aggregateUser.schema";
import { UserGroupBySchema } from "../schemas/groupByUser.schema";

export const usersRouter = createRouter()

  .query("aggregate", {
    input: UserAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregate = await ctx.prisma.user.aggregate(input);
      return aggregate;
    },
  })

  .mutation("createOne", {
    input: UserCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOne = await ctx.prisma.user.create({ data: input.data });
      return createOne;
    },
  })

  .mutation("deleteMany", {
    input: UserDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteMany = await ctx.prisma.user.deleteMany(input);
      return deleteMany;
    },
  })

  .mutation("deleteOne", {
    input: UserDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOne = await ctx.prisma.user.delete({ where: input.where });
      return deleteOne;
    },
  })

  .query("findFirst", {
    input: UserFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirst = await ctx.prisma.user.findFirst(input);
      return findFirst;
    },
  })

  .query("findMany", {
    input: UserFindManySchema,
    async resolve({ ctx, input }) {
      const findMany = await ctx.prisma.user.findMany(input);
      return findMany;
    },
  })

  .query("findUnique", {
    input: UserFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUnique = await ctx.prisma.user.findUnique({ where: input.where });
      return findUnique;
    },
  })

  .query("groupBy", {
    input: UserGroupBySchema,
    async resolve({ ctx, input }) {
      const groupBy = await ctx.prisma.user.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBy;
    },
  })

  .mutation("updateMany", {
    input: UserUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateMany = await ctx.prisma.user.updateMany(input);
      return updateMany;
    },
  })

  .mutation("updateOne", {
    input: UserUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOne = await ctx.prisma.user.update({ where: input.where, data: input.data });
      return updateOne;
    },
  })

  .mutation("upsertOne", {
    input: UserUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOne = await ctx.prisma.user.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOne;
    },
  })
