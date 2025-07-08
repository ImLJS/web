const DashedLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
			<div className="hidden w-full border-r bg-dashed opacity-75 lg:block" />
			<div className="relative col-span-1">{children}</div>
			<div className="hidden w-full border-l bg-dashed opacity-75 lg:block" />
		</div>
	);
};
export default DashedLayout;
