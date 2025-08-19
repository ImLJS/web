import { getBaseUrl } from "@/utils/get-base-url";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";

export const authClient = createAuthClient({
	baseURL: getBaseUrl(),
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
