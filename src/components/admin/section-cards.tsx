import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const SectionCards = () => {
	return (
		<div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:grid-cols-2 lg:px-6 xl:grid-cols-3 dark:*:data-[slot=card]:bg-card">
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Active Projects and Apps</CardDescription>
					<CardTitle className="font-semibold @[250px]/card:text-3xl text-2xl tabular-nums">
						10
					</CardTitle>
					<CardAction>
						<Badge variant="outline" className="gap-1">
							<TrendingUp />
							+12.5%
						</Badge>
					</CardAction>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						Increase when you add new tools <TrendingUp size={18} />
					</div>
					<div className="text-muted-foreground">
						“All systems running fine”
					</div>
				</CardFooter>
			</Card>
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Files uploaded this week/month</CardDescription>
					<CardTitle className="font-semibold @[250px]/card:text-3xl text-2xl tabular-nums">
						1,234
					</CardTitle>
					<CardAction>
						<Badge variant="outline" className="gap-1">
							<TrendingUp />
							+20%
						</Badge>
					</CardAction>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						Spikes in activity <TrendingUp className="size-4" />
					</div>
					<div className="text-muted-foreground">You’ve been busy!</div>
				</CardFooter>
			</Card>
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Lines of Code Today</CardDescription>
					<CardTitle className="font-semibold @[250px]/card:text-3xl text-2xl tabular-nums">
						100
					</CardTitle>
					<CardAction>
						<Badge variant="outline" className="gap-1">
							<TrendingUp />
							+12.5%
						</Badge>
					</CardAction>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						Most of it CSS fixes <TrendingUp className="size-4" />
					</div>
					<div className="text-muted-foreground">Loc(k)ed in</div>
				</CardFooter>
			</Card>
		</div>
	);
};

export default SectionCards;
