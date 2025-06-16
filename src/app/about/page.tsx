import Hero from "@/components/about/hero";
import { siteMetadata } from "@/data/siteMetadata";

const AboutPage = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<Hero description={siteMetadata.aboutDescription} />
		</div>
	);
};

export default AboutPage;
