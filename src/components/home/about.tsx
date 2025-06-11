import GridLayout from "../layouts/grid-layout";
import AboutMeBento from "./bento-cards/about-bento";
import ProjectCardBento from "./bento-cards/project-card-bento";
import SideProjectsBento from "./bento-cards/sideprojects-bento";
import TechStackBento from "./bento-cards/techstack-bento";

const About = () => {
	return (
		<section className="relative space-y-10 md:space-y-16">
			{/* <AboutPattern /> */}
			<div className="space-y-4">
				<GridLayout>
					<div className="text-center font-medium text-indigo-600 text-sm">
						<span>About</span>
					</div>
				</GridLayout>
				<GridLayout>
					<h2 className="mx-auto max-w-lg text-balance text-center font-medium text-3xl leading-10 tracking-tight md:text-4xl">
						Here&apos;s what sets me apart and makes me unique
					</h2>
				</GridLayout>
			</div>

			<GridLayout>
				<div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
					<div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-5">
						<AboutMeBento linkTo="/about" />
					</div>

					<div className="md:col-span-12 lg:col-span-7 lg:row-span-7">
						<ProjectCardBento
							title="Portfolio"
							description="A sleek and modern portfolio website built with React and styled-components to showcase my work."
							imageUrl="/projects/temp_project.webp"
							linkTo="#"
						/>
					</div>

					<div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
						<TechStackBento />
					</div>

					<div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
						<SideProjectsBento linkTo="#" />
					</div>
				</div>
			</GridLayout>
		</section>
	);
};

export default About;
