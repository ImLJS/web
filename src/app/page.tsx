import About from "@/components/home/about";
import FeaturedProjects from "@/components/home/featured-projects";
import GitHubActivity from "@/components/home/github";
import Hero from "@/components/home/hero";
import Misc from "@/components/home/misc";
import MySite from "@/components/home/my-site";

const page = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<Hero />
			<About />
			<FeaturedProjects />
			<GitHubActivity />
			<MySite />
			<Misc />
		</div>
	);
};

export default page;
