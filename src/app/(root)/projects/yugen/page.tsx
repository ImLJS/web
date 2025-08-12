import GalleryCollage from "@/components/pages/gallery";
import { siteMetadata } from "@/data/siteMetadata";
import { getMetadata } from "@/lib/seo";
import { api } from "@/trpc/server";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata({
	title: "Yūgen Gallery",
	description: siteMetadata.galleryDescription,
	url: "/projects/yugen",
});

const YugenPage = async () => {
	const photos = await api.gallery.getAll();

	return <GalleryCollage photos={photos} />;
};

export default YugenPage;
