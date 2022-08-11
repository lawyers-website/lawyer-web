import NextAuth, { type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from 'src/server/db/client';
import { env } from '../../../env/server.mjs';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email@email.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!password) {
          return null;
        }
        const user = await prisma.user.findFirst({ where: { email } });
        if (user && user.password) {
          const isPasswordMatched = await bcrypt.compare(
            password,
            user?.password
          );

          if (isPasswordMatched) {
            return { ...user, password: undefined };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: 'auth/sigin',
  },
};

export default NextAuth(authOptions);
