import Link from "next/link";
import HeroLayout from "../layouts/hero-layout";
import { Button } from "../ui/button";

interface HeroProps {
	readonly description: string;
}

const Hero = ({ description }: HeroProps) => (
	<HeroLayout caption="Projects" title={description}>
		<div className="flex items-center gap-4 sm:justify-center">
			<Button asChild>
				<Link href="/">Know About Me</Link>
			</Button>
			<Button asChild>
				<Link href="/">Let&apos;s hang out!</Link>
			</Button>
		</div>
	</HeroLayout>
);

export default Hero;
