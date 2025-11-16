"use server";

import path from "node:path";
import { fileURLToPath } from "node:url";
import * as dotenvx from "@dotenvx/dotenvx";
import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootEnvPath = path.resolve(__dirname, "../../../.env");

dotenvx.config({
	path: rootEnvPath,
	override: true,
});

export const env = createEnv({
	shared: {
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
	},

	server: {
		DATABASE_URL: z.url(),
		SERVER_URL: z.url(),
		SPOTIFY_CLIENT_ID: z.string(),
		SPOTIFY_CLIENT_SECRET: z.string(),
		SPOTIFY_REFRESH_TOKEN: z.string(),
		CORS_ORIGIN: z.string(),
		BETTER_AUTH_SECRET: z.string(),
		UMAMI_WEBSITE_URL: z.url(),
		UMAMI_WEBSITE_ID: z.string(),
		UMAMI_SHARE_URL: z.url(),
		NEXT_TELEMETRY_DISABLED: z.string().default("true"),
	},

	client: {
		NEXT_PUBLIC_SITE_URL: z.url().optional(),
		NEXT_PUBLIC_SERVER_URL: z.url(),
		NEXT_PUBLIC_GITHUB_USERNAME: z.string(),
		NEXT_PUBLIC_GITHUB: z.url(),
		NEXT_PUBLIC_EMAIL: z.email(),
		NEXT_PUBLIC_LINKEDIN: z.string(),
		NEXT_PUBLIC_APPWRITE_ENDPOINT: z.url(),
		NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
		NEXT_PUBLIC_APPWRITE_BUCKET_ID: z.string(),
	},

	experimental__runtimeEnv: {
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
		NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
		NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
		NEXT_PUBLIC_GITHUB: process.env.NEXT_PUBLIC_GITHUB,
		NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
		NEXT_PUBLIC_LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN,
		NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
		NEXT_PUBLIC_APPWRITE_PROJECT_ID:
			process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
		NEXT_PUBLIC_APPWRITE_BUCKET_ID: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
		NODE_ENV: process.env.NODE_ENV,
	},
});
