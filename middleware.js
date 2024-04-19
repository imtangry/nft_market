import { auth } from "@/auth"

export function middleware(req) {
    console.log('req.auth-----------', req.auth) //  { session: { user: { ... } } }
    return auth(req)
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}