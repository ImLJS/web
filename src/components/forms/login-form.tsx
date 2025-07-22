"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/data/routes";
import { authClient } from "@/lib/auth-client";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";

const { fieldContext, formContext } = createFormHookContexts();

const passwordValidation = new RegExp(
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);

const userSchema = z.object({
	Email: z.email(),
	Password: z
		.string()
		.min(1, { message: "Must have at least 1 character" })
		.regex(passwordValidation, {
			message: "Your password is not valid",
		}),
});

const { useAppForm } = createFormHook({
	fieldComponents: { Input },
	formComponents: { Button },
	fieldContext,
	formContext,
});

const LoginForm = () => {
	const { AppField, handleSubmit, reset, state } = useAppForm({
		defaultValues: {
			Email: "",
			Password: "",
		},
		validators: {
			onSubmit: userSchema,
		},
		onSubmit: async ({ value }) => {
			await authClient.signIn.email({
				email: value.Email,
				password: value.Password,
				rememberMe: false,
				callbackURL: ROUTES.ADMIN,
				fetchOptions: {
					onError: () => {
						toast.error("Login failed. Please check your credentials.");
						reset();
					},
					onSuccess: () => {
						toast.success("Login successful!");
						reset();
					},
				},
			});
		},
	});

	const isSubmitting = state.isSubmitting;
	return (
		<form
			className="flex flex-col gap-6"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="font-bold text-2xl">Login to your account</h1>
				<p className="text-balance text-muted-foreground text-sm">
					Enter your email below to login to your account
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-3">
					<AppField name={"Email"} key={"Email"}>
						{(field) => (
							<div className="flex flex-col gap-3">
								<Label htmlFor={field.name}>{field.name}</Label>
								<field.Input
									id={field.name}
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
									placeholder={"m@example.com"}
								/>
								{field.state.meta.errors?.[0]?.message && (
									<p className="text-destructive text-sm">
										{field.state.meta.errors[0].message}
									</p>
								)}
							</div>
						)}
					</AppField>
				</div>
				<div className="grid gap-3">
					<AppField name={"Password"} key={"Password"}>
						{(field) => (
							<div className="flex flex-col gap-3">
								<Label htmlFor={field.name}>{field.name}</Label>
								<field.Input
									id={field.name}
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
									type="password"
								/>
								{field.state.meta.errors?.[0]?.message && (
									<p className="text-destructive text-sm">
										{field.state.meta.errors[0].message}
									</p>
								)}
							</div>
						)}
					</AppField>
				</div>
				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "Submit"}
				</Button>
			</div>
		</form>
	);
};

export default LoginForm;
