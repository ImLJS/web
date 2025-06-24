import { siteMetadata } from "@/data/siteMetadata";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SectionWrapper from "../layouts/section-wrapper";
import { Icons } from "./icons";

const Contact = () => {
	return (
		<SectionWrapper
			id="contact"
			className={cn("grid gap-8 bg-dashed p-6 sm:grid-cols-2 sm:p-8")}
		>
			<h2 className="font-bold text-2xl tracking-tight sm:text-3xl">
				Whether you have a project, a question, or just want to connect — I'm
				always open.
			</h2>
			<div className="relative">
				<div className="grid h-full grid-cols-2 divide-x">
					<div className="group flex items-center justify-center py-5 transition-colors hover:bg-paper/10 md:py-0">
						<Icons.file className="h-8 w-8 text-paper opacity-50 group-hover:opacity-100" />
						<h3 className="ml-2 font-semibold text-xl">Resume</h3>
					</div>
					<div className="group py-5 transition-colors hover:bg-paper/10 md:py-0">
						<Link
							href={`mailto:${siteMetadata.email}`}
							className="flex h-full items-center justify-center"
						>
							<Icons.mail className="h-8 w-8 text-paper opacity-50 group-hover:opacity-100" />
							<h3 className="ml-2 font-semibold text-xl">Email</h3>
						</Link>
					</div>
				</div>
				<div className="faded-line-bottom" />
				<div className="faded-line-top" />
				<div className="faded-line-left" />
				<div className="faded-line-right" />
			</div>
		</SectionWrapper>
	);
};

export default Contact;
