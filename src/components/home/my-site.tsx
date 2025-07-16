import { NAVIGATION } from "@/data/nav";
import { BentoCard } from "../layouts/bento-layout";
import SectionWrapper from "../layouts/section-wrapper";

const MySite = () => {
	return (
		<SectionWrapper
			heading="My Site"
			description="My site is a playful sandbox. Explore, experiment, && say hello"
			className="border-y"
		>
			<div className="m-4 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
				{NAVIGATION.misc.map((navItem) => (
					<BentoCard key={navItem.title} {...navItem} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default MySite;
