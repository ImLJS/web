import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "./auth";

export const authClient = createAuthClient({
	plugins: [inferAdditionalFields<typeof auth>()],
});

export const signIn: typeof authClient.signIn = authClient.signIn;

export const signOut: typeof authClient.signOut = authClient.signOut;

export const useSession: typeof authClient.useSession = authClient.useSession;
