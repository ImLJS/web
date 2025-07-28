import { FaDatabase, FaLaptopCode, FaPencilRuler } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import TempProjectImage from "@/assets/images/temp_project.webp";

export const PROJECTS = [
	{
		featured: true,
		slug: "portfolio",
		title: "Portfolio",
		description: "Modern React portfolio to showcase work.",
		href: "#",
		icon: FaLaptopCode,
		tags: ["React", "CSS", "JavaScript"],
		image: TempProjectImage,
		archived: false,
	},
	{
		featured: true,
		slug: "gallery",
		title: "Gallery",
		description:
			"A personal image gallery to showcase illustrations and visual experiments.",
		href: "#",
		icon: FiImage,
		tags: ["Supabase", "Drizzle", "Appwrite"],
		image: TempProjectImage,
		archived: true,
	},
	{
		featured: true,
		slug: "data_store",
		title: "Datastore",
		description: "Scalable data system with Node.js.",
		href: "#",
		icon: FaDatabase,
		tags: ["MySQL", "Node.js", "Express"],
		image: TempProjectImage,
		archived: true,
	},
	{
		featured: false,
		slug: "revamp",
		title: "Revamp",
		description: "UI/UX redesign for better usability.",
		href: "#",
		icon: FaPencilRuler,
		tags: ["Figma", "Adobe XD", "Sketch"],
		image: TempProjectImage,
		archived: true,
	},
] as const;
