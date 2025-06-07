import BentoLayout from "../layouts/bento-layout";

interface ProjectCardBentoProps {
	title: string;
	description: string;
	imageUrl: string;
	linkTo?: string;
}

const ProjectCardBento = ({
	title,
	description,
	imageUrl,
	linkTo,
}: ProjectCardBentoProps) => {
	return (
		<BentoLayout height="h-[275px]" linkTo={linkTo}>
			<div className="group grid h-full grid-rows-2">
				<div className="flex flex-col pr-3 text-left">
					<h2 className="mb-2 font-medium text-base">{title}</h2>
					<p className="text-muted-foreground text-sm">{description}</p>
				</div>
				<div className="relative w-full">
					<div
						className="rounded-[20px] border p-2 transition-all duration-500 ease-out group-hover:border-indigo-400"
						style={{ width: 375, height: 200 }}
					>
						<div
							className="grid h-full place-items-center rounded-xl border-2 border-border/10 bg-muted"
							style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
						/>
					</div>
					<img
						className="absolute top-0 left-0 h-[270px] w-full rotate-[8deg] rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105"
						src={imageUrl}
						alt={`${title} preview`}
					/>
				</div>
			</div>
		</BentoLayout>
	);
};

export default ProjectCardBento;
