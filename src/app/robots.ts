import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				disallow: ["/admin", "/api", "/login"],
			},
		],
		sitemap: "https://imljs.dev/sitemap.xml",
	};
}
