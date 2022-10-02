import { t } from "../../trpc";
import { userRouter } from "./User.router";
import { postRouter } from "./Post.router";

export const appRouter = t.router({
  user: userRouter,
  post: postRouter
})
