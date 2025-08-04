import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/admin/*", "/api/*", "/login"],
			},
		],
		sitemap: "https://imljs.me/sitemap.xml",
	};
};

export default robots;
