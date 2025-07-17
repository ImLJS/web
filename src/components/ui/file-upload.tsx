import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

export const FileUpload = ({
	onChange,
}: {
	onChange?: (files: File[]) => void;
}) => {
	const [files, setFiles] = useState<File[]>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (newFiles: File[]) => {
		setFiles((prevFiles) => [...prevFiles, ...newFiles]);
		onChange?.(newFiles);
	};

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	const { getRootProps, isDragActive } = useDropzone({
		multiple: false,
		noClick: true,
		onDrop: handleFileChange,
		onDropRejected: (error) => {
			console.log(error);
		},
	});

	return (
		<div className="w-full" {...getRootProps()}>
			<div
				onClick={handleClick}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						handleClick();
					}
				}}
				className="group/file relative block w-full cursor-pointer overflow-hidden rounded-lg p-10"
			>
				<input
					ref={fileInputRef}
					id="file-upload-handle"
					type="file"
					onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
					className="hidden"
					accept="image/*"
				/>
				<div className="flex flex-col items-center justify-center">
					<p className="relative z-20 font-bold font-sans text-base text-neutral-700 dark:text-neutral-300">
						Upload file
					</p>
					<p className="relative z-20 mt-2 font-normal font-sans text-base text-neutral-400 dark:text-neutral-400">
						Drag or drop your files here or click to upload
					</p>
					<div className="relative mx-auto w-full max-w-xl">
						{files.length > 0 &&
							files.map((file, idx) => (
								<div
									key={`file ${idx}`}
									className={cn(
										"relative z-40 mx-auto mt-4 flex w-full flex-col items-start justify-start overflow-hidden rounded-md bg-white p-4 shadow-sm md:h-24 dark:bg-neutral-900",
									)}
								>
									<div className="flex w-full items-center justify-between gap-4">
										<p className="max-w-xs truncate text-base text-neutral-700 dark:text-neutral-300">
											{file.name}
										</p>
										<p className="w-fit shrink-0 rounded-lg px-2 py-1 text-neutral-600 text-sm shadow-input dark:bg-neutral-800 dark:text-white">
											{(file.size / (1024 * 1024)).toFixed(2)} MB
										</p>
									</div>

									<div className="mt-2 flex w-full flex-col items-start justify-between text-neutral-600 text-sm md:flex-row md:items-center dark:text-neutral-400">
										<p className="rounded-md bg-gray-100 px-1 py-0.5 dark:bg-neutral-800">
											{file.type}
										</p>
										<p>
											modified{" "}
											{new Date(file.lastModified).toLocaleDateString()}
										</p>
									</div>
								</div>
							))}
						{!files.length && (
							<div
								className={cn(
									"relative z-40 mx-auto mt-4 flex h-16 w-full max-w-[8rem] items-center justify-center rounded-md bg-white shadow-[0px_10px_50px_rgba(0,0,0,0.1)] group-hover/file:shadow-2xl dark:bg-neutral-900",
								)}
							>
								{isDragActive ? (
									<p className="flex flex-col items-center text-neutral-600">
										Drop it
										<FiUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
									</p>
								) : (
									<FiUpload className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
								)}
							</div>
						)}

						{!files.length && (
							<div className="absolute inset-0 z-30 mx-auto mt-4 flex h-32 w-full max-w-[8rem] items-center justify-center rounded-md border border-sky-400 border-dashed bg-transparent opacity-0" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
