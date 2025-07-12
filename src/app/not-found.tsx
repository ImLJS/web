import { ROUTES } from "@/data/routes";
import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center py-8 md:flex-row md:items-center md:justify-center md:space-x-6">
			<div className="space-x-2 pt-6 pb-8 md:space-y-5">
				<h1 className="font-extrabold text-6xl leading-9 tracking-tight md:border-r-2 md:px-6 md:text-8xl md:leading-14">
					404
				</h1>
			</div>
			<div className="flex flex-col items-center justify-center md:max-w-md">
				<p className="mb-4 font-bold text-xl leading-normal md:text-2xl">
					Sorry we couldn&apos;t find this page.
				</p>
				<p className="mx-2 mb-8 text-center">
					But dont worry, you can find plenty of other things on our homepage.
					Or you watch{" "}
					<Link href={"https://youtu.be/dPmZqsQNzGA"} className="text-link">
						This
					</Link>{" "}
					while you wait for the page to load.
				</p>
				<Link
					href={ROUTES.HOME}
					className="inline rounded-lg border border-transparent bg-primary px-4 py-2 font-medium text-sm text-white leading-5 shadow-xs transition-colors duration-150 hover:bg-primary/70 focus:shadow-outline-blue focus:outline-hidden"
				>
					Back to homepage
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
