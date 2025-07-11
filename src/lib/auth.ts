import { getBaseUrl } from "@/utils/get-base-url";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { db } from "@/db";

const getGitHubConfig = () => {
	const baseUrl = getBaseUrl();
	const isNetworkIP = baseUrl.includes("10.221.96.26");

	return {
		clientId: isNetworkIP
			? (process.env.GITHUB_CLIENT_ID_DEV as string)
			: (process.env.GITHUB_CLIENT_ID as string),
		clientSecret: isNetworkIP
			? (process.env.GITHUB_CLIENT_SECRET_DEV as string)
			: (process.env.GITHUB_CLIENT_SECRET as string),
	};
};

export const auth = betterAuth({
	baseURL: getBaseUrl(),
	trustedOrigins: [getBaseUrl()],
	database: drizzleAdapter(db, {
		provider: "pg",
		usePlural: true,
	}),
	socialProviders: {
		github: getGitHubConfig()
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
