"use client";

import BentoLayout from "@/components/layouts/bento-layout";

type GuestbookBentoProps = {
	href: string;
	title: string;
	description: string;
};

const GuestbookBento = ({ title, description, href }: GuestbookBentoProps) => {
	return (
		<BentoLayout linkTo={href} height="h-[150px]">
			<div className="grid h-full grid-cols-2 grid-rows-2 items-end gap-8">
				<div className="z-10 col-1 row-start-2">
					<h2 className="mb-2 font-medium">{title}</h2>
					<p className="text-muted-foreground">
						{description}
					</p>
				</div>
			</div>
		</BentoLayout>
	);
};

export default GuestbookBento;
