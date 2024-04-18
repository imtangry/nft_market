import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getCsrfToken } from "next-auth/react"
import { SiweMessage } from "siwe"

export const { handlers, auth } = NextAuth((req) => {
  console.log('req.query-----------',req.url);
  // const isDefaultSigninPage = req.method === "GET" && req.query && req.query.nextauth.includes("signin")

  // // Hide Sign-In with Ethereum from default sign page
  // if (isDefaultSigninPage) {
  //   providers.pop()
  // }

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
            const nextAuthUrl = new URL(process.env.NEXTAUTH_URL)

            const result = await siwe.verify({
              signature: credentials?.signature || "",
              domain: nextAuthUrl.host,
              nonce: await getCsrfToken({ req }),
            })

            if (result.success) {
              return {
                id: siwe.address,
              }
            }
            return null
          } catch (e) {
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
      async session({ session, token }) {
        session.address = token.sub
        session.user.name = token.sub
        session.user.image = "/user.png"
        return session
      },
    },
  }
})