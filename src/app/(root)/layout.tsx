import Contact from "@/components/common/contact";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header";
import DashedLayout from "@/components/layouts/dashed-layout";

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
