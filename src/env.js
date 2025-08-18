import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars.
	 */
	server: {
		DATABASE_URL: z.url(),
		SPOTIFY_CLIENT_ID: z.string(),
		SPOTIFY_CLIENT_SECRET: z.string(),
		SPOTIFY_REFRESH_TOKEN: z.string(),
		BETTER_AUTH_SECRET: z.string(),
		BETTER_AUTH_URL: z.url().default("http://localhost:3000"),
		UMAMI_WEBSITE_URL: z.url(),
		UMAMI_WEBSITE_ID: z.string(),
		UMAMI_SHARE_URL: z.url(),
		NEXT_TELEMETRY_DISABLED: z.string().default("true"),
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
	},

	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {
		NEXT_PUBLIC_SITE_URL: z.url().optional(),
		NEXT_PUBLIC_GITHUB_USERNAME: z.string(),
		NEXT_PUBLIC_GITHUB: z.url(),
		NEXT_PUBLIC_EMAIL: z.email(),
		NEXT_PUBLIC_LINKEDIN: z.string(),
		NEXT_PUBLIC_APPWRITE_ENDPOINT: z.url(),
		NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
		NEXT_PUBLIC_APPWRITE_BUCKET_ID: z.string(),
	},

	/**
	 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 */
	runtimeEnv: {
		// Server-side environment variables
		DATABASE_URL: process.env.DATABASE_URL,
		SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
		SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
		SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
		BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
		BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
		UMAMI_WEBSITE_URL: process.env.UMAMI_WEBSITE_URL,
		UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
		UMAMI_SHARE_URL: process.env.UMAMI_SHARE_URL,
		NEXT_TELEMETRY_DISABLED: process.env.NEXT_TELEMETRY_DISABLED,

		// Client-side environment variables
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
		NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
		NEXT_PUBLIC_GITHUB: process.env.NEXT_PUBLIC_GITHUB,
		NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
		NEXT_PUBLIC_LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN,
		NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
		NEXT_PUBLIC_APPWRITE_PROJECT_ID:
			process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
		NEXT_PUBLIC_APPWRITE_BUCKET_ID: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,

		// Common environment variables
		NODE_ENV: process.env.NODE_ENV,
		// NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
	},
	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
	 * useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	/**
	 * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
	 * `SOME_VAR=''` will throw an error.
	 */
	emptyStringAsUndefined: true,
});
