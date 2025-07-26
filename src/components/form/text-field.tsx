import { useFieldContext } from ".";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FieldErrors } from "./field-errors";

type TextFieldProps = {
	label: string;
	placeholder?: string;
	type?: string;
};

export const TextField = ({ label, ...props }: TextFieldProps) => {
	const field = useFieldContext<string>();
	return (
		<div className="space-y-1">
			<Label htmlFor={field.name}>{label}</Label>
			<Input
				id={field.name}
				value={field.state.value}
				onChange={(e) => field.handleChange(e.target.value)}
				placeholder={props.placeholder ?? `Enter ${field.name}`}
				onBlur={field.handleBlur}
				{...props}
			/>
			<FieldErrors meta={field.state.meta} />
		</div>
	);
};
