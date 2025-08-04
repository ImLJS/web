import {
	BunJs,
	CSS,
	ESLint,
	Git,
	HTML5,
	JavaScript,
	NextJs,
	Notion,
	OpenAI,
	Prettier,
	Python,
	React,
	ReactQuery,
	Redux,
	TailwindCSS,
	TypeScript,
	VercelLight,
} from "developer-icons";

export const allSkills = [
	{
		name: "HTML",
		link: "https://www.w3.org/html",
		icon: HTML5,
	},
	{
		name: "CSS",
		link: "https://www.w3.org/Style/CSS/Overview.en.html",
		icon: CSS,
	},
	{
		name: "JavaScript",
		link: "https://www.javascript.com",
		icon: JavaScript,
	},
	{
		name: "TypeScript",
		link: "https://www.typescriptlang.org",
		icon: TypeScript,
	},
	{
		name: "React",
		link: "https://reactjs.org",
		icon: React,
	},
	{
		name: "Next.js",
		link: "https://nextjs.org",
		icon: NextJs,
	},
	{
		name: "Python",
		link: "https://www.python.org",
		icon: Python,
	},
	{
		name: "Git",
		link: "https://git-scm.com",
		icon: Git,
	},
	{
		name: "Tailwind CSS",
		link: "https://tailwindcss.com",
		icon: TailwindCSS,
	},
	{
		name: "GPT",
		link: "https://chatgpt.com",
		icon: OpenAI,
		className: "[&_path]:fill-foreground",
	},
	{
		name: "React Query",
		link: "https://tanstack.com/query",
		icon: ReactQuery,
	},
	{
		name: "Redux",
		link: "https://redux.js.org/",
		icon: Redux,
	},
	{
		name: "Vercel",
		link: "https://vercel.com",
		icon: VercelLight,
		className: "[&_path]:fill-foreground",
	},
	{
		name: "Bun",
		link: "https://bun.sh",
		icon: BunJs,
	},
	{
		name: "ESLint",
		link: "https://eslint.org",
		icon: ESLint,
	},
	{
		name: "Prettier",
		link: "https://prettier.io",
		icon: Prettier,
	},
	{
		name: "Notion",
		link: "https://www.notion.so",
		icon: Notion,
	},
] as const;
