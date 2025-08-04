import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";
import { useState } from "react";

const GalleryControls = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	return (
		<div className="mb-4 flex items-center justify-end">
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogTrigger asChild>
					<Button variant="ghost" size="icon">
						<Info className="h-4 w-4" />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Gallery Disclaimer</DialogTitle>
					</DialogHeader>
					<div className="space-y-3 text-muted-foreground text-sm">
						<p>
							This gallery features curated illustrations sourced from various
							platforms. Please note:
						</p>
						<ul className="list-inside list-disc space-y-1">
							<li>
								All images are credited to their original creators whenever
								possible
							</li>
							<li>
								We do not claim ownership of content unless explicitly stated
							</li>
							<li>
								Content reflects the views of the original artists, not this
								platform
							</li>
							<li>
								We cannot guarantee the accuracy of image details or metadata
							</li>
							<li>
								If you're the artist and wish to have your work removed, please
								contact us via email
							</li>
						</ul>
						<p>
							By viewing this gallery, you acknowledge and accept these terms.
						</p>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default GalleryControls;
