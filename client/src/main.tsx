import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThirdwebProvider } from "thirdweb/react";
import ContentCard from "./components/ContentCard";
import ConnectButtonAuth from "./components/ConnectButtonAuth";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThirdwebProvider>
			<div className="w-screen flex flex-col min-h-screen bg-black text-slate-100">
				<div className="flex-1 max-w-7xl mx-auto p-4 flex items-start justify-center py-48">
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
				</div>
				<footer className="border-t w-full flex items-center justify-center md:justify-end px-4 border-slate-400/50 p-4 text-sm text-slate-400 text-center max-w-7xl mx-auto">
					<a
						href="https://github.com/thirdweb-example/thirdweb-auth-express/"
						target="_blank"
						className="flex items-center gap-1 font-semibold hover:underline"
					>
						Fork this project on GitHub
					</a>
				</footer>
			</div>
		</ThirdwebProvider>
	</React.StrictMode>
);
