import { z } from "zod";
import { createProtectedRouter } from "./protected-router";

export const userRouter = createProtectedRouter()
  .mutation("lawyerForm", {
    input: z.object({
      institution: z.string(),
      course: z.string(),
      experience: z.number(),
      description: z.string(),
      fullName: z.string(),
      services: z.string(),
      expertise: z.string(),
      state: z.string(),
      country: z.string(),
      image: z.string(),
      price: z.number(),
    }),
    async resolve({ input, ctx }) {
      try {
        await ctx.prisma.user.update({
          where: {
            id: ctx.session.user.id,
          },

          data: {
            role: "LAWYER",
            lawyerDetails: {
              create: {
                course: input.course,
                experience: input.experience,
                institution: input.institution,
                description: input.description,
                fullName: input.fullName,
                image: input.image,
                services: input.services,
                expertise: input.expertise,
                state: input.state,
                country: input.country,
                price: input.price,
              },
            },
          },
        });

        return {
          message: "Lawyer details added successfully",
        };
      } catch (error) {
        console.log(error);
      }
    },
  })
  .mutation("review", {
    input: z.object({
      rating: z.number(),
      review: z.string(),
      lawyerId: z.string(),
    }),
    async resolve({ input, ctx }) {
      try {
        await prisma?.lawyerDetails.update({
          where: {
            lawyerId: input.lawyerId,
          },
          data: {
            reviews: {
              create: {
                rating: input.rating,
                review: input.review,
                userName: ctx.session.user.name,
                userId: ctx.session.user.id,
              },
            },
          },
        });
      } catch (error) {
        return error;
      }
    },
  })
  .mutation("updateRating", {
    input: z.string(),
    async resolve({ input, ctx }) {
      try {
        const reviews = await prisma?.reviews.findMany({
          where: {
            lawyerId: input,
          },
        });
        let ratings = 0;
        if (reviews) {
          for (let i = 0; i < reviews.length; i++) {
            ratings = ratings + (reviews[i]?.rating as number);
          }
        }
        const rating = ratings / (reviews?.length as number);
        await ctx.prisma.lawyerDetails.update({
          where: {
            lawyerId: input,
          },
          data: {
            rating: rating,
            numofreviews: reviews?.length as number,
          },
        });
        return {
          message: "success",
        };
      } catch (error) {
        return error;
      }
    },
  })
  .mutation("getLawyers", {
    input: z.string(),
    async resolve({ input, ctx }) {
      const lawyers = await ctx.prisma.lawyerDetails.findMany({
        take: 6,
        where: {
          fullName: {
            contains: input,
            mode: "insensitive",
          },
        },
      });
      const usernames = lawyers?.map((lawyer) => lawyer.fullName);
      return { usernames };
    },
  });
