import Hero from "@/components/about/hero";
import { siteMetadata } from "@/data/siteMetadata";

const AboutPage = () => {
	return (
		<div className="relative space-y-16">
			<Hero description={siteMetadata.aboutDescription} />
		</div>
	);
};

export default AboutPage;
