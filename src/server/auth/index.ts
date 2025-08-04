import { betterAuth as betterAuthClient } from "better-auth";

import { db } from "@/server/db";
import { getBaseUrl } from "@/utils/get-base-url";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";
import { cache } from "react";

export const betterAuth = betterAuthClient({
	baseURL: getBaseUrl(),
	trustedOrigins: [getBaseUrl()],
	database: drizzleAdapter(db, {
		provider: "pg",
		usePlural: true,
	}),
	emailAndPassword: {
		enabled: true,
	},
	user: {
		additionalFields: {
			role: {
				type: "string",
				required: true,
				input: false,
				defaultValue: "user",
			},
		},
	},
	session: {
		expiresIn: 60 * 60 * 24 * 14, // 14 days
		updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
	},
	plugins: [nextCookies()],
});

export const { handler } = betterAuth;

export const auth = cache(async () => {
	const session = await betterAuth.api.getSession({
		headers: await headers(),
	});
	return session;
});

export type Session = typeof betterAuth.$Infer.Session;
