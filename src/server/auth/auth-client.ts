import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";

export const authClient = createAuthClient({
	baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
	plugins: [
		inferAdditionalFields({
			user: {
				role: {
					type: "string",
					required: true,
					input: false,
					defaultValue: "user",
				},
			},
		}),
	],
	fetchOptions: {
		onError(e: { error: { status: number } }) {
			if (e.error.status === 429) {
				toast.error("Too many requests. Please try again later.");
			}
		},
	},
});

export const { signIn, signOut, useSession } = authClient;

export type Session = typeof authClient.$Infer.Session;
