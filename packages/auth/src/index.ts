import { db } from "@repo/db";
import * as schema from "@repo/db/schema/index";
import { env } from "@repo/env";
import { type BetterAuthOptions, betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth<BetterAuthOptions>({
	database: drizzleAdapter(db, {
		provider: "pg",
		usePlural: true,
		schema: schema,
	}),
	trustedOrigins: env.CORS_ORIGIN ? env.CORS_ORIGIN.split(",") : [],
	emailAndPassword: {
		enabled: true,
	},
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
});
