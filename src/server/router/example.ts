import { createRouter } from './context';
import { z } from 'zod';
export const exampleRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      };
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findUnique({
        where: {
          email: 'abhiram@gmail.com',
        },
      });
    },
  })
  .query('test', {
    async resolve({ ctx }) {
      console.log(ctx.session?.user);
      return 'testing...';
    },
  });
