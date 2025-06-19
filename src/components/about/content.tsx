import { Prose } from "@/components/ui/prose";
import { cn } from "@/lib/utils";
import Link from "next/link";

import SectionWrapper from "../layouts/section-wrapper";

const Content = () => {
	return (
		<SectionWrapper>
			<div
				className={cn(
					"flex h-full flex-col items-start justify-between gap-4 p-6",
					"sm:p-8",
				)}
			>
				<div className="flex flex-col gap-2">
					<Prose className="[&_a]:no-underline">
						<p>
							I&apos;m a software developer who enjoys building thoughtful,
							minimal, and user-friendly experiences for the web. I mostly work
							with React and Next.js, and I currently build things at LG Soft
							India. I like writing clean, maintainable code and making
							interfaces that feel smooth, purposeful, and a little bit magical.
						</p>
						<p>
							Outside of work, I spend a good chunk of time working on side
							projects or contributing to open-source, especially WebToEpub,
							where I&apos;ve climbed my way up the commit leaderboard. I&apos;m
							always exploring new ideas—whether it's figuring out how to
							improve my personal website or experimenting with creative ways to
							showcase Japanese illustrations (which I&apos;ve quietly been
							collecting).
						</p>

						<p>
							When I&apos;m not coding, I&apos;m usually out wandering the city,
							listening to music, or deep into an anime binge. My playlists jump
							from calm movie soundtracks to upbeat J-pop—RADWIMPS holds a
							permanent spot, and anything by Yuki Kajiura is instant
							inspiration. I like quiet parks, ambient loops, rainy days, and
							side projects that never fully leave my mind. If it blends
							creativity and code, I&apos;m probably into it.
						</p>

						<p>
							Sound interesting? Feel free to{" "}
							<Link href="#contact">chat with me!</Link>
						</p>
					</Prose>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Content;
