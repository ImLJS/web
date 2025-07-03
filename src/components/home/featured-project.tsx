import Image from "next/image";
import TempProjectImage from "../../../public/projects/temp_project.webp";
import SplitWrapper from "../layouts/split-wrapper";

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
			<div className="relative aspect-video w-full overflow-hidden rounded-tl-lg bg-muted sm:rounded-tl-2xl">
				<Image
					alt="Project Image"
					src={TempProjectImage}
					fill
					className="object-cover"
					priority={false}
					sizes="(min-width: 640px) 800px, 100vw"
				/>
			</div>
		</div>
	</SplitWrapper>
);

export default FeaturedProject;
