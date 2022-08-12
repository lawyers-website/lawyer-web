import { createRouter } from './context';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from 'src/server/db/client';

export const userRouter = createRouter()
  .mutation('signup', {
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    }),
    async resolve({ input }) {
      const password = await bcrypt.hash(input.password, 10);

      try {
        await prisma.user.create({
          data: {
            email: input.email,
            name: input.name,
            password: password,
          },
        });
        return {
          success: true,
          message: 'Account created',
        };
      } catch (error) {
        return {
          success: false,
          error,
        };
      }
    },
  })
  .mutation('isEmailExists', {
    input: z.string().email(),
    async resolve({ input }) {
      const isEmailExists = Boolean(
        await prisma.user.findUnique({
          where: {
            email: input,
          },
        })
      );

      return {
        isEmailExists,
      };
    },
  });
