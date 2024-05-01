import ContentCard from "../components/ContentCard";
import ConnectButtonAuth from "../components/ConnectButtonAuth";

export default function Root() {
	return (
		<div className="mx-auto w-full flex items-center flex-col">
			<div className="text-slate-100 mb-24 text-center font-bold text-5xl">
				React + Express{" "}
				<a
					href="https://portal.thirdweb.com/connect/auth"
					target="_blank"
					className="text-transparent transition bg-clip-text tw-gradient"
				>
					thirdweb auth
				</a>{" "}
				template.
			</div>

			<ContentCard content="Fully customize your auth flow using prebuilt components or easy to use functions.">
				<ConnectButtonAuth />
			</ContentCard>
		</div>
	);
}
