// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { userRouter } from "./user";
import { openRouter } from "./openRoute";
import { adminRouter } from "./admin";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("question.", protectedExampleRouter)
  .merge("user.", userRouter)
  .merge("util.", openRouter)
  .merge("admin.", adminRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
