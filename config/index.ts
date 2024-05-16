import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Audience Sizing Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'en-US',
}

export const isShowPrompt = true
export const promptTemplate = 'I want you to act as an oracle.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

import { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Validate credentials with your database here
        const user = {
          id: "1",
          name: "Admin",
          email: "admin@example.com",
          image: "https://avatars.githubusercontent.com/u/80968727?v=4",
          username: `${process.env.NEXTAUTH_USERNAME}`,
          password: `${process.env.NEXTAUTH_PASSWORD}`,
        };

        if (
          credentials?.username == user.username &&
          credentials.password == user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET!,
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.AUTH_SECRET!,
};
