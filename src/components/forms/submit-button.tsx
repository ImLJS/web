import { useStore } from "@tanstack/react-form";
import { useFormContext } from ".";
import { Icons } from "../shared/icons";
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
			{isSubmitting && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
			{children}
		</Button>
	);
};
