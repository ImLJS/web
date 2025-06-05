import * as motion from "motion/react-client";
import { Icons } from "../common/icons";

const ProfilePicture = () => {
	return (
		<div className="relative my-5 md:mt-9">
			<div className="relative">
				<motion.div
					animate={{ scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 10,
					}}
				>
					<Icons.concentric_circles className="mx-auto" />
				</motion.div>
				<div className="absolute inset-0 flex items-center justify-center">
					<motion.img
						key={"avatar"}
						className="h-[100px] w-[100px] rounded-full"
						src={"./avatar.png"}
						alt=""
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfilePicture;
