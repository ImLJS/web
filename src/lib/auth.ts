import { db } from "@/server/db";
import { getBaseUrl } from "@/utils/get-base-url";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";

export const auth = betterAuth({
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
});

export const getSession = async (request?: NextRequest) => {
	return auth.api.getSession({
		headers: request ? request.headers : await headers(),
	});
};

export const checkIsAdmin = async (request?: NextRequest) => {
	const session = await getSession(request);
	return session?.user?.role === "admin";
};
