import type { Metadata } from "next";

type MetadataProps = {
	title: string;
	description: string;
	url?: string;
};

export const getMetadata = ({
	title,
	description,
	url = "/",
}: MetadataProps): Metadata => {
	const baseUrl = "https://imljs.me";
	const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
	const imageUrl = `${baseUrl}/opengraph-image.jpg`;

	return {
		title: `${title} | ImLJS`,
		description,
		metadataBase: new URL(baseUrl),
		openGraph: {
			title: `${title} | ImLJS`,
			description,
			url: fullUrl,
			siteName: "ImLJS",
			type: "website",
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: `${title} | ImLJS Open Graph Image`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | ImLJS`,
			description,
			images: [imageUrl],
		},
	};
};
