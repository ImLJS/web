"use client";

import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";

const { fieldContext, formContext } = createFormHookContexts();

const userSchema = z.object({
	Username: z.string().min(1, "Username is required"),
	Source: z.url("Source must be a valid URL"),
	Handle: z.string().min(1, "Handle is required"),
	Image: z.file("Invalid file type"),
});

type UserFormValues = z.infer<typeof userSchema>;

const { useAppForm } = createFormHook({
	fieldComponents: { Input },
	formComponents: { Button },
	fieldContext,
	formContext,
});

const GalleryForm = () => {
	const { AppField, AppForm, handleSubmit, reset } = useAppForm({
		defaultValues: {
			Username: "",
			Source: "",
			Handle: "",
			Image: null,
		} as unknown as UserFormValues,
		validators: {
			onSubmit: userSchema,
		},
		onSubmit: async ({ value }) => {
			const formData = new FormData();
			formData.append("Username", value.Username);
			formData.append("Handle", value.Handle);
			formData.append("Source", value.Source);
			formData.append("Image", value.Image as File);

			const response = await fetch("/api/gallery", {
				method: "POST",
				body: formData,
			});

			if (response.ok && response.status === 200) {
				toast.success("Gallery item added successfully!");
				reset();
			} else {
				const errorData = await response.json();
				toast.error(errorData.error || "Failed to add gallery item");
			}
		},
	});

	const fields = [
		{ name: "Username", label: "Username" },
		{ name: "Source", label: "Source URL" },
		{ name: "Handle", label: "Handle" },
	] as const;

	return (
		<div className="mx-auto max-w-6xl gap-y-10 rounded-lg border p-6">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
				className="flex flex-col gap-6"
			>
				<AppField name="Image">
					{(field) => (
						<div className="flex flex-col gap-3">
							<FileUpload
								onChange={(files: File[]) => {
									if (files[0]) {
										field.handleChange(files[0]);
									}
								}}
								value={field.state.value}
							/>
							{field.state.meta.errors?.[0]?.message && (
								<p className="text-center text-destructive text-sm">
									{field.state.meta.errors[0].message}
								</p>
							)}
						</div>
					)}
				</AppField>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{fields.map(({ name, label }) => (
						<AppField name={name} key={name}>
							{(field) => (
								<div className="flex flex-col gap-3">
									<Label htmlFor={field.name}>{label}</Label>
									<field.Input
										id={field.name}
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder={`Enter ${field.name}`}
									/>
									{field.state.meta.errors?.[0]?.message && (
										<p className="mt-1 text-destructive text-sm">
											{field.state.meta.errors[0].message}
										</p>
									)}
								</div>
							)}
						</AppField>
					))}
				</div>

				<div className="mt-4 flex justify-end gap-4">
					<AppForm>
						<Button type="submit" className="w-24">
							Submit
						</Button>
					</AppForm>
					<AppForm>
						<Button type="button" variant="secondary" onClick={() => reset()}>
							Reset
						</Button>
					</AppForm>
				</div>
			</form>
		</div>
	);
};

export default GalleryForm;
