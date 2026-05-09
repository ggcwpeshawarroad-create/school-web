import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  trustHost: true,
  pages: {
    signIn: '/admin/login',
  },
  session: { strategy: 'jwt' },
  callbacks: {
    async authorized({ auth, request }) {
      const { nextUrl } = request;
      const isLoggedIn = !!auth?.user;
      const isAdminPath = nextUrl.pathname.startsWith('/admin');
      const isLoginPage = nextUrl.pathname === '/admin/login';

      if (isAdminPath && !isLoginPage) {
        if (isLoggedIn) return true;
        return false; // Redirect to login
      } else if (isLoginPage && isLoggedIn) {
        // Redirect to /admin using the current origin from nextUrl
        return Response.redirect(new URL('/admin', nextUrl.origin));
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: [], // Empty for now, will be added in auth.ts
} satisfies NextAuthConfig;
