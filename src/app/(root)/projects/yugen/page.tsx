import YugenCollage from "@/components/pages/yugen";
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

	return <YugenCollage photos={photos} />;
};

export default YugenPage;
