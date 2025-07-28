"use client";

import { useAppForm } from "@/components/forms";
import { FieldErrors } from "@/components/forms/field-errors";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { z } from "zod";

const userSchema = z.object({
	Username: z.string().min(1, "Username is required"),
	Source: z.url("Source must be a valid URL"),
	Handle: z.string().min(1, "Handle is required"),
	Image: z.file("Please select a valid image file"),
});

type UserFormValues = z.infer<typeof userSchema>;

const GalleryForm = () => {
	const utils = api.useUtils();

	const { AppField, AppForm, handleSubmit, reset, state, SubmitButton } =
		useAppForm({
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
				try {
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
						await utils.gallery.getAll.invalidate();

						toast.success("Gallery item added successfully!");
						reset();
					} else {
						const errorData = await response.json();
						toast.error(errorData.error || "Failed to add gallery item");
					}
				} catch (error) {
					console.error("Submission error:", error);
					toast.error("Failed to add gallery item. Please try again.");
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
							<Label>Image Upload</Label>
							<FileUpload
								onChange={(files: File[]) => {
									const file = files[0];
									if (file && file instanceof File) {
										field.handleChange(file);
									}
								}}
								value={field.state.value}
							/>
							<FieldErrors meta={field.state.meta} />
						</div>
					)}
				</AppField>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{fields.map(({ name, label }) => (
						<AppField name={name} key={name}>
							{(field) => (
								<div className="flex flex-col gap-3">
									<field.TextField label={label} />
								</div>
							)}
						</AppField>
					))}
				</div>

				<div className="flex justify-end gap-4">
					<AppForm>
						<SubmitButton className="w-24">Submit</SubmitButton>
					</AppForm>

					<Button
						className="w-24"
						type="button"
						variant="secondary"
						onClick={() => reset()}
					>
						Reset
					</Button>
				</div>
			</form>
		</div>
	);
};

export default GalleryForm;
