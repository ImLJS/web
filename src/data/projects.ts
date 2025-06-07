import TempProjectImage from "../../public/projects/temp_project.webp";

export const PROJECTS = [
	{
		slug: "portfolio",
		title: "Portfolio",
		description:
			"A sleek and modern portfolio website built with React and styled-components to showcase my work.",
		href: "https://myportfolio.com",
		tags: ["React", "CSS", "JavaScript"],
		image: TempProjectImage,
		archived: false,
	},
	{
		slug: "shopify",
		title: "Shopify",
		description:
			"A mobile app developed using React Native for e-commerce, complete with user authentication and payment gateway integration.",
		href: "https://myshopapp.com",
		tags: ["React Native", "Firebase", "Stripe"],
		image: TempProjectImage,
		archived: true,
	},
	{
		slug: "data_store",
		title: "Datastore",
		description:
			"A robust database management system using MySQL and Node.js for handling large-scale data processing and storage.",
		href: "https://datastore.com",
		tags: ["MySQL", "Node.js", "Express"],
		image: TempProjectImage,
		archived: true,
	},
	{
		slug: "revamp",
		title: "Revamp",
		description:
			"A complete UI/UX redesign for an e-commerce platform, focusing on improving usability and accessibility for better user engagement.",
		href: "https://revampdesign.com",
		tags: ["Figma", "Adobe XD", "Sketch"],
		image: TempProjectImage,
		archived: true,
	},
];
