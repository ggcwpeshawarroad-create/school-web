import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import dbConnect from '@/lib/db';
import Admin from '@/lib/models/Admin';
import { authConfig } from './auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        await dbConnect();
        const admin = await Admin.findOne({ email: credentials.email });
        if (!admin) return null;
        const isValid = await admin.comparePassword(credentials.password as string);
        if (!isValid) return null;
        return { id: admin._id.toString(), email: admin.email, name: admin.name };
      },
    }),
  ],
});
