import { ROUTES } from "@/data/routes";
import Link from "next/link";

interface ErrorPageProps {
	type?: "404" | "500" | "403" | "error";
	customCode?: string | number;
	customTitle?: string;
	customMessage?: string;
	showHomeButton?: boolean;
	homeButtonText?: string;
}

const ErrorPage = ({
	type = "404",
	customCode,
	customTitle,
	customMessage,
	showHomeButton = true,
	homeButtonText = "Back to homepage",
}: ErrorPageProps) => {
	const getErrorContent = () => {
		switch (type) {
			case "404":
				return {
					code: "404",
					title: "Sorry we couldn't find this page.",
					message:
						"But dont worry, you can find plenty of other things on our homepage. Or you can watch",
					waitText: "while you wait for the page to load.",
				};
			case "500":
				return {
					code: "500",
					title: "Oops! Something went wrong.",
					message:
						"We encountered an unexpected error on our servers. Or you can watch",
					waitText: "while you wait for things to get fixed.",
				};
			default:
				return {
					code: "Error",
					title: "Something went wrong.",
					message: "We're working to fix this issue. Or you can watch",
					waitText: "while you wait for the fix.",
				};
		}
	};

	const { code, title, message, waitText } = getErrorContent();

	return (
		<div className="flex h-screen flex-col items-center justify-center py-8 md:flex-row md:items-center md:justify-center md:space-x-6">
			<div className="space-x-2 pt-6 pb-8 md:space-y-5">
				<h1 className="font-extrabold text-6xl leading-9 tracking-tight md:border-r-2 md:px-6 md:text-8xl md:leading-14">
					{customCode || code}
				</h1>
			</div>
			<div className="flex flex-col items-center justify-center md:max-w-md">
				<p className="mb-4 font-bold text-xl leading-normal md:text-2xl">
					{customTitle || title}
				</p>
				<p className="mx-2 mb-8 text-center">
					{customMessage || message}{" "}
					<Link href={"https://youtu.be/dPmZqsQNzGA"} className="text-link">
						This
					</Link>{" "}
					{waitText}
				</p>
				{showHomeButton && (
					<Link
						href={ROUTES.HOME}
						className="inline rounded-lg border border-transparent bg-primary px-4 py-2 font-medium text-sm text-white leading-5 shadow-xs transition-colors duration-150 hover:bg-primary/70 focus:shadow-outline-blue focus:outline-hidden"
					>
						{homeButtonText}
					</Link>
				)}
			</div>
		</div>
	);
};

export default ErrorPage;
