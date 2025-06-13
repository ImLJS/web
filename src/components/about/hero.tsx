import HeroLayout from "../layouts/hero-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
	readonly description: string;
}

const Hero = ({ description }: HeroProps) => (
	<HeroLayout caption="About" title={description}>
		<div className="flex items-center gap-4 sm:justify-center">
			<Button asChild>
				<Link href="/contact">Check out my Projects</Link>
			</Button>
			<Button asChild>
				<Link href="/contact">Let&apos;s hang out!</Link>
			</Button>
		</div>
	</HeroLayout>
);

export default Hero;
