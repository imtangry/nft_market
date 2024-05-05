import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { SiweMessage } from "siwe"
export const { handlers, auth } = NextAuth(
  (req) => {
    return {
      providers: [
        CredentialsProvider({
          name: "Ethereum",
          credentials: {
            message: {
              label: "Message",
              type: "text",
              placeholder: "0x0",
            },
            signature: {
              label: "Signature",
              type: "text",
              placeholder: "0x0",
            },
          },
          async authorize(credentials) {
            try {
              const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"))

              const result = await siwe.verify({
                signature: credentials?.signature || "",
              })

              if (result.success) {
                return {
                  id: siwe.address,
                  name: 'Rhys'
                }
              }
              return null
            } catch (e) {
              console.log('authorize errorrrrr', e);
              return null
            }
          },
        }),
      ],
      session: {
        strategy: "jwt",
      },
      secret: process.env.AUTH_SECRET,
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.name = user.name
          }
          return token
        },
        async session({ session, token }) {
          session.address = token.sub
          session.user.name = token.name
          session.user.image = "https://www.fillmurray.com/128/128"
          return session
        },
      }
    }
  }
)
