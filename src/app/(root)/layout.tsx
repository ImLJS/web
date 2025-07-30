import Footer from "@/components/features/navigation/footer/footer";
import Header from "@/components/features/navigation/header";
import DashedLayout from "@/components/layout/dashed-layout";
import Contact from "@/components/shared/contact";

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
