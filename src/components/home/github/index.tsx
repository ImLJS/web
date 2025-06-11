import dayjs from "dayjs";
import { unstable_cache as cache } from "next/cache";

import { ViewAnimation } from "@/components/providers/view-animation";

import { Calendar } from "./calendar";

import SectionLayout from "@/components/layouts/section-layout";
import { siteMetadata } from "@/data/siteMetadata";
import Link from "next/link";
import type { Activity } from "react-activity-calendar";

const getContributions = cache(
	async () => {
		const today = dayjs().subtract(1, "week").endOf("week");
		const oneYearAgo = today.subtract(365, "day");
		const twoYearsAgo = today.subtract(1092, "day");

		const response = await fetch(
			"https://github-contributions-api.jogruber.de/v4/ImLJS",
		);
		const data = (await response.json()) as {
			contributions: Activity[];
		};

		return {
			data: data.contributions
				.filter(
					({ date }) =>
						dayjs(date).isBefore(today) && dayjs(date).isAfter(twoYearsAgo),
				)
				.sort((a, b) => dayjs(a.date).valueOf() - dayjs(b.date).valueOf()),
			total: data.contributions.reduce(
				(total, { date, count }) =>
					dayjs(date).isAfter(oneYearAgo) && dayjs(date).isBefore(today)
						? total + count
						: total,
				0,
			),
		};
	},
	["github-contributions"],
	{ revalidate: 60 * 60 * 24 },
);

const GitHubActivity = async () => {
	const github = await getContributions();

	const quarterLength = Math.floor(github.data.length / 4);
	const firstQuarterData = github.data.slice(0, quarterLength);
	const secondQuarterData = github.data.slice(quarterLength, quarterLength * 2);
	const thirdQuarterData = github.data.slice(
		quarterLength * 2,
		quarterLength * 3,
	);
	const fourthQuarterData = github.data.slice(quarterLength * 3);

	const totalData = [
		{
			id: "thirdQuarter",
			data: thirdQuarterData,
		},
		{
			id: "fourthQuarter",
			data: fourthQuarterData,
		},
		{
			id: "firstQuarter",
			data: firstQuarterData,
		},
		{
			id: "secondQuarter",
			data: secondQuarterData,
		},
	];

	return (
		<SectionLayout
			heading="GitHub"
			description="My digital footprint — one commit at a time."
		>
			<ViewAnimation
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className="relative grid gap-0.5 py-6 sm:grid-cols-2 sm:p-8"
			>
				{totalData.map((data) => (
					<Calendar
						key={data.id}
						hideColorLegend
						hideTotalCount
						hideMonthLabels
						data={data.data}
					/>
				))}
				<div className="absolute right-0 bottom-0 left-0 z-10 h-full bg-linear-to-b from-transparent to-background lg:bottom-8 lg:h-40" />
				<Link
					className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 whitespace-nowrap font-mono text-muted-foreground text-xs"
					href={`https://github.com/${siteMetadata.githubUser}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{github.total} contributions in the last year 🔥
				</Link>
			</ViewAnimation>
		</SectionLayout>
	);
};

export default GitHubActivity;
