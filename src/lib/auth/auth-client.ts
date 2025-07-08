import { siteMetadata } from "@/data/siteMetadata";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: siteMetadata.baseUrl,
});

export const { signIn, signUp, useSession } = authClient;
