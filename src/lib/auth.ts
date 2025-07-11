import { getBaseUrl } from "@/utils/get-base-url";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { db } from "@/db";

export const auth = betterAuth({
	baseURL: getBaseUrl(),
	trustedOrigins: [getBaseUrl()],
	database: drizzleAdapter(db, {
		provider: "pg",
		usePlural: true
	}),
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
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
});

export const getSession = async (request?: NextRequest) => {
	return auth.api.getSession({
		headers: request ? request.headers : await headers(),
	});
};
