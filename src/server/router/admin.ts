import { z } from "zod";
import { createProtectedRouter } from "./protected-router";

export const adminRouter = createProtectedRouter().mutation("delete", {
  input: z.string(),
  async resolve({ input, ctx }) {
    try {
      await ctx.prisma.user.delete({
        where: {
          id: input,
        },
      });
      return {
        message: "Success",
      };
    } catch (error) {
      console.log(error);
    }
  },
});
