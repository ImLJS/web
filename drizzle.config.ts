import type { Config } from "drizzle-kit";

import { env } from "@/env";

export default {
	schema: "./src/db/schemas/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	out: "./src/db/migrations",
	strict: true,
	verbose: true,
} satisfies Config;
