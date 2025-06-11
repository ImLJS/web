import GridLayout from "../layouts/grid-layout";
import GuestbookBento from "./bento-cards/guestbook-bento";

const MySite = () => {
	return (
		<section className="relative space-y-10 md:space-y-16">
			<div className="space-y-4 text-balance">
				<GridLayout>
					<div className="text-center font-medium text-indigo-600 text-sm">
						<span>My Site</span>
					</div>
				</GridLayout>
				<GridLayout>
					<h2 className="text-center font-medium text-3xl text-text-primary leading-10 tracking-tighter md:mx-auto md:max-w-lg md:text-4xl">
						My site is a playful sandbox. Explore, experiment, && say hello
					</h2>
				</GridLayout>
			</div>

			<GridLayout>
				<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
					<GuestbookBento />
					<GuestbookBento />
					<GuestbookBento />
				</div>
			</GridLayout>
		</section>
	);
};

export default MySite;
