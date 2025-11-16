import dotenv from "dotenv";
import type { NextConfig } from "next";

dotenv.config({ path: "../../.env" });

const config: NextConfig = {
	reactCompiler: true,
	typedRoutes: true,
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
			{
				protocol: "https",
				hostname: "images-na.ssl-images-amazon.com",
			},
		],
	},

	typescript: { ignoreBuildErrors: true },
};

export default config;
