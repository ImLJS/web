import About from "./about";
import Hero from "./hero";
import MySite from "./my-site";

const Home = () => {
	return (
		<div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
			<Hero />
			<About />
			<MySite />
		</div>
	);
};

export default Home;
