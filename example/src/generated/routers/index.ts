import { usersRouter } from "./User.router";
import { postsRouter } from "./Post.router";
import { t } from "../../trpc";

export const appRouter = t.router({
  users: usersRouter,
  posts: postsRouter
})
