import type { AnyFieldMeta } from "@tanstack/react-form";

type FieldErrorsProps = {
	meta: AnyFieldMeta;
};

export const FieldErrors = ({ meta }: FieldErrorsProps) => {
	if (!meta.isTouched) return null;

	return (
		<p className="h-1 font-medium text-destructive text-sm">
			{meta.errors[0]?.message}
		</p>
	);
};
