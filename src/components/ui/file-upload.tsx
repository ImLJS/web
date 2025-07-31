import { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload, FiX } from "react-icons/fi";

export const FileUpload = ({
	onChange,
	value,
	multiple = false,
}: {
	onChange?: (files: File[]) => void;
	value?: File | File[] | null;
	multiple?: boolean;
}) => {
	const [files, setFiles] = useState<File[]>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (value) {
			if (Array.isArray(value)) {
				setFiles(value);
			} else {
				setFiles([value]);
			}
		} else {
			setFiles([]);
		}
	}, [value]);

	const handleFileChange = (newFiles: File[]) => {
		if (multiple) {
			const updatedFiles = [...files, ...newFiles];
			setFiles(updatedFiles);
			onChange?.(updatedFiles);
		} else {
			const selectedFile = newFiles[0] ?? null;
			const fileArray = selectedFile ? [selectedFile] : [];
			setFiles(fileArray);
			onChange?.(fileArray);
		}
	};

	const removeFile = (indexToRemove: number) => {
		const updatedFiles = files.filter((_, index) => index !== indexToRemove);
		setFiles(updatedFiles);
		onChange?.(updatedFiles);
	};

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	const { getRootProps, isDragActive } = useDropzone({
		multiple,
		noClick: true,
		onDrop: handleFileChange,
		onDropRejected: (error) => {
			console.log(error);
		},
	});

	return (
		<div className="w-full bg-dark/20" {...getRootProps()}>
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
					multiple={multiple}
					onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
					className="hidden"
					accept="image/*"
				/>
				<div className="flex flex-col items-center justify-center">
					<p className="font-bold text-base">
						Upload {multiple ? "files" : "file"}
					</p>
					<p className="mt-2 font-normal text-base">
						Drag or drop your {multiple ? "files" : "file"} here or click to
						upload
					</p>

					<div className="relative mx-auto mt-4 flex w-full max-w-xl items-center justify-center">
						{files.length > 0 ? (
							<div className="w-full space-y-3">
								{files.map((file, index) => (
									<div
										key={`${file.name}-${index}`}
										className="relative mx-auto flex items-center justify-between rounded-md border p-4 shadow-sm"
									>
										<div className="min-w-0 flex-1">
											<div className="flex items-center justify-between gap-4">
												<p className="truncate font-medium">{file.name}</p>
												<p className="text-gray-500 text-sm">
													{(file.size / (1024 * 1024)).toFixed(2)} MB
												</p>
											</div>
											<div className="mt-1 flex items-center justify-between text-gray-400 text-sm">
												<p>{file.type}</p>
												<p>
													modified{" "}
													{new Date(file.lastModified).toLocaleDateString()}
												</p>
											</div>
										</div>
										{multiple && (
											<button
												type="button"
												onClick={(e) => {
													e.stopPropagation();
													removeFile(index);
												}}
												className="ml-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700"
											>
												<FiX className="h-4 w-4" />
											</button>
										)}
									</div>
								))}
								{multiple && (
									<div className="text-center text-gray-500 text-sm">
										{files.length} file{files.length !== 1 ? "s" : ""} selected
									</div>
								)}
							</div>
						) : (
							<div className="flex h-16 w-full max-w-[8rem] items-center justify-center rounded-md shadow-md dark:bg-neutral-900">
								{isDragActive ? (
									<p className="flex flex-col items-center">
										Drop {multiple ? "them" : "it"}{" "}
										<FiUpload className="h-4 w-4" />
									</p>
								) : (
									<FiUpload className="h-4 w-4" />
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
