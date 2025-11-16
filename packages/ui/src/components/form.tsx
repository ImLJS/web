"use client";

import type { AnyFieldMeta } from "@tanstack/react-form";
import {
	createFormHook,
	createFormHookContexts,
	useStore,
} from "@tanstack/react-form";
import { Button } from "./button";
import { Icons } from "./icons";
import { Input } from "./input";
import { Label } from "./label";

type FieldErrorsProps = {
	meta: AnyFieldMeta;
};

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

type TextFieldProps = {
	label: string;
	placeholder?: string;
	type?: string;
};

// Create contexts and hooks
const { fieldContext, useFieldContext, formContext, useFormContext } =
	createFormHookContexts();

// Component definitions
const FieldErrors = ({ meta }: FieldErrorsProps) => {
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

const TextField = ({ label, ...props }: TextFieldProps) => {
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

const SubmitButton = ({ children, type, ...props }: SubmitButtonProps) => {
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

const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
});

export {
	// Contexts and hooks
	fieldContext,
	useFieldContext,
	formContext,
	useFormContext,
	useAppForm,
	// Components
	TextField,
	SubmitButton,
	FieldErrors,
};
