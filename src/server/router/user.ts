import { createRouter } from './context';
import { z } from 'zod';
import { createProtectedRouter } from './protected-router';

export const userRouter = createProtectedRouter().mutation('lawyerForm', {
  input: z.object({
    institution: z.string(),
    course: z.string(),
    experience: z.number(),
  }),
  async resolve({ input, ctx }) {
    await ctx.prisma.user.update({
      where: {
        id: ctx.session.user.id,
      },

      data: {
        role: 'LAWYER',
        lawyerDetails: {
          create: {
            course: input.course,
            experience: input.experience,
            institution: input.institution,
          },
        },
      },
    });

    return {
      message: 'Lawyer details added successfully',
    };
  },
});
