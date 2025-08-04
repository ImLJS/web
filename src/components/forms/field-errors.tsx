import type { AnyFieldMeta } from "@tanstack/react-form";

type FieldErrorsProps = {
	meta: AnyFieldMeta;
};

export const FieldErrors = ({ meta }: FieldErrorsProps) => {
	return (
		<div className="relative h-5">
			{meta.errors[0]?.message && (
				<p className="absolute top-0 left-0 font-medium text-destructive text-sm">
					{meta.errors[0].message}
				</p>
			)}
		</div>
	);
};
