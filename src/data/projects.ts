import TempProjectImage from "../../public/projects/temp_project.webp";

export const PROJECTS = [
	{
		featured: true,
		slug: "portfolio",
		title: "Portfolio",
		description: "Modern React portfolio to showcase work.",
		href: "https://myportfolio.com",
		tags: ["React", "CSS", "JavaScript"],
		image: TempProjectImage,
		archived: false,
	},
	{
		featured: true,
		slug: "shopify",
		title: "Shopify",
		description: "E-commerce app with payments & auth.",
		href: "https://myshopapp.com",
		tags: ["React Native", "Firebase", "Stripe"],
		image: TempProjectImage,
		archived: true,
	},
	{
		featured: true,
		slug: "data_store",
		title: "Datastore",
		description: "Scalable data system with Node.js.",
		href: "https://datastore.com",
		tags: ["MySQL", "Node.js", "Express"],
		image: TempProjectImage,
		archived: true,
	},
	{
		featured: false,
		slug: "revamp",
		title: "Revamp",
		description: "UI/UX redesign for better usability.",
		href: "https://revampdesign.com",
		tags: ["Figma", "Adobe XD", "Sketch"],
		image: TempProjectImage,
		archived: true,
	},
] as const;
