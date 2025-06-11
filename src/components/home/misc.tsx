import SectionWrapper from "../layouts/section-wrapper";
import LatestRead from "./latest-read";
import Spotify from "./spotify";

const Misc = () => {
	return (
		<SectionWrapper
			heading="Currently Enjoying"
			description="From my headphones to my bookshelf"
		>
			<div className="grid divide-y lg:grid-cols-2 lg:divide-x lg:divide-y-0">
				<div className="min-w-0 px-6 py-4 lg:py-6">
					<Spotify />
				</div>
				<div className="min-w-0 px-6 py-4 lg:py-6">
					<LatestRead />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Misc;
