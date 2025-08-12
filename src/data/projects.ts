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
		slug: "yugen",
		title: "Yūgen Gallery",
		description:
			"A personal image gallery to showcase illustrations and visual experiments.",
		href: "/projects/yugen",
		icon: FiImage,
		tags: ["Supabase", "Drizzle", "Appwrite"],
		image: TempProjectImage,
		archived: false,
	},
] as const;
