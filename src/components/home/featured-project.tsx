import SplitWrapper from "../layouts/split-wrapper";

import TempProjectImage from "../../../public/projects/temp_project.webp";
import Image from "next/image";

const FeaturedProject = () => (
	<SplitWrapper
		sectionHeading="Featured Project"
		sectionDescription="Built from scratch, still evolving."
		caption="Now 🔥"
		description="A modern portfolio website built with Next.js and Tailwind CSS. Features a clean, responsive design with dark mode support and dynamic content loading."
		buttons={[
			{
				label: "Check it out",
				href: "#",
			},
		]}
	>
		<div className="pt-4 pl-4 sm:pt-8 sm:pl-8">
			<div className="dashed-line-top" />
			<div className="dashed-line-left" />
			<Image
				alt="Project Image"
				src={TempProjectImage}
				className="aspect-video w-full rounded-tl-lg bg-muted sm:rounded-tl-2xl"
				priority
				width={1600}
				height={900}
				decoding="async"
			/>
		</div>
	</SplitWrapper>
);

export default FeaturedProject;
