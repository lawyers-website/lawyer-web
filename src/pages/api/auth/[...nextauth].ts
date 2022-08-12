import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "src/server/db/client";
import { env } from "../../../env/server.mjs";
import bcrypt from "bcryptjs";
import { AuthError } from "src/pages/signin";

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session }) {
      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!password) {
          throw new Error(`${AuthError.NO_PASSWORD}`);
        }
        const user = await prisma.user.findUnique({ where: { email } });
        if (user && user.password) {
          const isPasswordMatched = await bcrypt.compare(
            password,
            user?.password
          );

          if (isPasswordMatched) {
            return { ...user, password: undefined };
          } else {
            throw new Error(`${AuthError.WRONG_PASSWORD}`);
          }
        } else {
          throw new Error(`${AuthError.EMAIL_DOESNT_EXIST}`);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);
