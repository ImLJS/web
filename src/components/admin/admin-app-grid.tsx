import { ADMIN_APP_CARDS } from "@/data/nav";
import { BentoCard } from "../layouts/bento-layout";
import SectionWrapper from "../layouts/section-wrapper";

const AdminAppCard = () => {
	return (
		<SectionWrapper heading="App Dashboard" className="border-y">
			<div className="m-4 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
				{ADMIN_APP_CARDS.slice(0, 3).map((navItem) => (
					<BentoCard key={navItem.title} {...navItem} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default AdminAppCard;
