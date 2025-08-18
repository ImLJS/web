"use client";

import { useAppForm } from "@/components/forms";
import { ROUTES } from "@/data/routes";
import { signIn } from "@/server/auth/auth-client";
import { toast } from "sonner";
import z from "zod";

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

const LoginForm = () => {
	const { AppField, handleSubmit, reset, AppForm, SubmitButton } = useAppForm({
		defaultValues: {
			Email: "",
			Password: "",
		},
		validators: {
			onSubmit: userSchema,
		},
		onSubmit: async ({ value }) => {
			await signIn.email({
				email: value.Email,
				password: value.Password,
				rememberMe: false,
				callbackURL: ROUTES.ADMIN,
				fetchOptions: {
					onError: (err) => {
						toast.error("Login failed. Please check your credentials.");
						console.error("Login error:", err);
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
								<field.TextField
									label={field.name}
									placeholder={"m@example.com"}
								/>
							</div>
						)}
					</AppField>
				</div>
				<div className="grid gap-3">
					<AppField name={"Password"} key={"Password"}>
						{(field) => (
							<div className="flex flex-col gap-3">
								<field.TextField label={field.name} type="password" />
							</div>
						)}
					</AppField>
				</div>
				<AppForm>
					<SubmitButton className="w-full">Submit</SubmitButton>
				</AppForm>
			</div>
		</form>
	);
};

export default LoginForm;
