/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	reactCompiler: true,
	transpilePackages: ["geist"],
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
			{
				protocol: "https",
				hostname: "fra.cloud.appwrite.io",
			},
		],
	},
};

export default config;
