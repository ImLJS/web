import { useStore } from "@tanstack/react-form";
import { useFormContext } from ".";
import { Button } from "../ui/button";

type SubmitButtonProps = {
	className?: string;
	type?: "submit" | "button";
	children: React.ReactNode;
	onClick?: () => void;
	variant?:
		| "default"
		| "secondary"
		| "destructive"
		| "outline"
		| "ghost"
		| "link"
		| "none";
};

export const SubmitButton = ({
	children,
	type,
	...props
}: SubmitButtonProps) => {
	const form = useFormContext();

	const [isSubmitting, canSubmit] = useStore(form.store, (state) => [
		state.isSubmitting,
		state.canSubmit,
	]);

	return (
		<Button
			type={type ?? "submit"}
			disabled={isSubmitting || !canSubmit}
			{...props}
		>
			{children}
		</Button>
	);
};
