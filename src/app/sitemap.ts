import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
	const baseUrl = "https://imljs.me";

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
	];
};

export default sitemap;
