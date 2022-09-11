import { createRouter } from "../../router";
import { PostFindUniqueSchema } from "../schemas/findUniquePost.schema";
import { PostFindFirstSchema } from "../schemas/findFirstPost.schema";
import { PostFindManySchema } from "../schemas/findManyPost.schema";
import { PostCreateOneSchema } from "../schemas/createOnePost.schema";
import { PostDeleteOneSchema } from "../schemas/deleteOnePost.schema";
import { PostUpdateOneSchema } from "../schemas/updateOnePost.schema";
import { PostDeleteManySchema } from "../schemas/deleteManyPost.schema";
import { PostUpdateManySchema } from "../schemas/updateManyPost.schema";
import { PostUpsertSchema } from "../schemas/upsertOnePost.schema";
import { PostAggregateSchema } from "../schemas/aggregatePost.schema";
import { PostGroupBySchema } from "../schemas/groupByPost.schema";

export const postsRouter = createRouter()

  .query("aggregate", {
    input: PostAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregate = await ctx.prisma.post.aggregate(input);
      return aggregate;
    },
  })

  .mutation("createOne", {
    input: PostCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOne = await ctx.prisma.post.create(input);
      return createOne;
    },
  })

  .mutation("deleteMany", {
    input: PostDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteMany = await ctx.prisma.post.deleteMany(input);
      return deleteMany;
    },
  })

  .mutation("deleteOne", {
    input: PostDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOne = await ctx.prisma.post.delete(input);
      return deleteOne;
    },
  })

  .query("findFirst", {
    input: PostFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirst = await ctx.prisma.post.findFirst(input);
      return findFirst;
    },
  })

  .query("findMany", {
    input: PostFindManySchema,
    async resolve({ ctx, input }) {
      const findMany = await ctx.prisma.post.findMany(input);
      return findMany;
    },
  })

  .query("findUnique", {
    input: PostFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUnique = await ctx.prisma.post.findUnique(input);
      return findUnique;
    },
  })

  .query("groupBy", {
    input: PostGroupBySchema,
    async resolve({ ctx, input }) {
      const groupBy = await ctx.prisma.post.groupBy(input);
      return groupBy;
    },
  })

  .mutation("updateMany", {
    input: PostUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateMany = await ctx.prisma.post.updateMany(input);
      return updateMany;
    },
  })

  .mutation("updateOne", {
    input: PostUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOne = await ctx.prisma.post.update(input);
      return updateOne;
    },
  })

  .mutation("upsertOne", {
    input: PostUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOne = await ctx.prisma.post.upsert(input);
      return upsertOne;
    },
  })
