import NextAuth, { AuthOptions } from "next-auth";
import AzureADProvider from 'next-auth/providers/azure-ad'
// import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
    providers: [
      AzureADProvider({
          clientId: process.env.AZURE_AD_CLIENT_ID as string,
          clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
          tenantId: process.env.AZURE_AD_TENANT_ID as string,
      }),
      // GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID as string,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      // }),
    ],
    session: {
      strategy: 'jwt'
    },
    callbacks: {
      async jwt({token, user}) {
          return {...token, ...user}
      },
      async session({session, token}) {
        session.user = token
          return session
      },
    },
  
    secret: process.env.NEXTAUTH_SECRET,
  }
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };