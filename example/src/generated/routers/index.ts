import { baseRouter } from "../../router";
import { usersRouter } from "./User.router";
import { postsRouter } from "./Post.router";

export const appRouter = baseRouter

  .merge('user.', usersRouter)

  .merge('post.', postsRouter)
