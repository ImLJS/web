import TempProjectImage from "@/assets/images/temp_project.webp";
import { FaLaptopCode } from "react-icons/fa";
import { FiImage } from "react-icons/fi";

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
		href: "/projects/gallery",
		icon: FiImage,
		tags: ["Supabase", "Drizzle", "Appwrite"],
		image: TempProjectImage,
		archived: true,
	},
] as const;
