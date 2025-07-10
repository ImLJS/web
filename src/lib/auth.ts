import { getBaseUrl } from "@/utils/get-base-url";
import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";

const prisma = new PrismaClient();

export const auth = betterAuth({
	baseURL: getBaseUrl(),
	trustedOrigins: [getBaseUrl()],
	database: prismaAdapter(prisma, {
		provider: "sqlite",
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
