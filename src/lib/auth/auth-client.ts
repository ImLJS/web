import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();

export const signIn: typeof authClient.signIn = authClient.signIn

export const signOut: typeof authClient.signOut = authClient.signOut

export const useSession: typeof authClient.useSession = authClient.useSession