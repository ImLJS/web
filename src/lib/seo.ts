import type { Metadata } from "next";

type MetadataProps = {
	title: string;
	description: string;
};

export const getMetadata = ({
	title,
	description,
}: MetadataProps): Metadata => {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url: "/",
			images: [
				{
					url: "https://imljs.dev/og-image.png",
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
