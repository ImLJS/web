import Contact from "@/components/common/contact";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header";
import DashedLayout from "@/components/layouts/dashed-layout";
import { siteMetadata } from "@/data/siteMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "%s | ImLJS",
		default: "Home",
	},
	description: siteMetadata.homeDescription,
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<DashedLayout>{children}</DashedLayout>
			<Contact />
			<Footer />
		</>
	);
};

export default RootLayout;
