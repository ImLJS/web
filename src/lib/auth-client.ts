import { siteMetadata } from "@/data/siteMetadata"
import { createAuthClient } from "better-auth/react"

const authClient = createAuthClient({
    baseURL: siteMetadata.baseUrl,
})

export const { signIn, signUp, useSession } = authClient