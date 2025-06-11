import About from "./about";
import Hero from "./hero";
import Misc from "./misc";
import MySite from "./my-site";

const Home = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<Hero />
			<About />
			<MySite />
			<Misc />
		</div>
	);
};

export default Home;
