import About from "@/components/home/about";
import FeaturedProject from "@/components/home/featured-project";
import GitHubActivity from "@/components/home/github";
import Hero from "@/components/home/hero";
import Misc from "@/components/home/misc";
import MySite from "@/components/home/my-site";

const page = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<Hero />
			<About />
			<FeaturedProject />
			<GitHubActivity />
			<MySite />
			<Misc />
		</div>
	);
};

export default page;
