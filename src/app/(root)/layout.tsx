import Contact from "@/components/common/contact";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<div className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
				<div className="hidden w-full border-r bg-dashed opacity-75 lg:block" />
				<div className="relative col-span-1">{children}</div>
				<div className="hidden w-full border-l bg-dashed opacity-75 lg:block" />
			</div>
			<Contact />
			<Footer />
		</>
	);
};

export default RootLayout;
