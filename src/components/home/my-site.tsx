import SectionWrapper from "../layouts/section-wrapper";
import GuestbookBento from "./bento-cards/guestbook-bento";

const MySite = () => {
	return (
		<SectionWrapper
			heading="My Site"
			description="My site is a playful sandbox. Explore, experiment, && say hello"
		>
			<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
				<GuestbookBento />
				<GuestbookBento />
				<GuestbookBento />
			</div>
		</SectionWrapper>
	);
};

export default MySite;
