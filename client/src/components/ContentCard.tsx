import thirdwebImageUrl from "../assets/thirdweb-logo.png";

export default function ContentCard({
	children,
	content,
}: {
	children: React.ReactNode;
	content: string;
}) {
	return (
		<div className="relative">
			<div className="z-10 h-full flex flex-col relative items-center justify-start max-w-sm p-12 rounded-xl bg-black/75 border-slate-800 border-2">
				<img
					src={thirdwebImageUrl}
					alt="Thirdweb"
					className="w-56 h-auto mb-12"
				/>
				{children}
				<div className="text-center text-slate-600 font-semibold mt-12">
					{content}
				</div>
			</div>
			<div className="absolute inset-0 z-0 tw-gradient blur-[50px] opacity-50" />
		</div>
	);
}
