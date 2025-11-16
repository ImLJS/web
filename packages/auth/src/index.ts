import dotenv from "dotenv";

dotenv.config({
	path: "../../../.env",
});

import { db } from "@repo/db";
import * as schema from "@repo/db/schema/auth-schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: schema,
		usePlural: true,
	}),
	trustedOrigins: process.env.CORS_ORIGIN
		? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
		: [],
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
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
});

export type Session = typeof auth.$Infer.Session;
