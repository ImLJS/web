import { getTimeOfDayGreeting } from "@/lib/utils";
import BentoLayout from "../layouts/bento-layout";

const AboutMeBento = ({ linkTo }: { linkTo?: string }) => {
	const timeOfDayGreeting = getTimeOfDayGreeting();

	return (
		<BentoLayout height="h-[275px] md:h-[304px] lg:h-[220px]" linkTo={linkTo}>
			<div className="group flex h-full">
				<div className="text-balance">
					<h2 className="mb-4 font-medium text-base">Learn more about me</h2>
					<p className="mb-2 text-balance pr-1 text-text-secondary md:pr-4">
						{timeOfDayGreeting} <br />
						I&apos;m Leone, an experienced front-end developer.
					</p>
				</div>
				<div className="relative">
					<div className="group inline-block text-center">
						<div
							className="rounded-[20px] border p-2 transition-all duration-500 ease-out group-hover:border-indigo-400"
							style={{ width: 188, height: 278 }}
						>
							<div
								className="grid h-full place-items-center rounded-xl border-2 border-border/10 bg-muted"
								style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
							/>
						</div>
					</div>
					<img
						className="-top-1 absolute left-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105"
						src="/avatar.png"
						alt="A headshot"
					/>
				</div>
			</div>
		</BentoLayout>
	);
};

export default AboutMeBento;
