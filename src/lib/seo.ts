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
		title,
		description,
		metadataBase: new URL(baseUrl),
		openGraph: {
			title,
			description,
			url: fullUrl,
			siteName: "ImLJS",
			type: "website",
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [imageUrl],
		},
	};
};
