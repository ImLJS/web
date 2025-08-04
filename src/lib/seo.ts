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
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url,
			images: [
				{
					url: "https://imljs.me/og-image.png",
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
	};
};
