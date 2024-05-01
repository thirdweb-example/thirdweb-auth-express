import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThirdwebProvider } from "thirdweb/react";
import Layout from "./layout";
import { CookiesProvider } from "react-cookie";
import Root from "./routes/root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CookiesProvider defaultSetOptions={{ path: "/" }}>
			<ThirdwebProvider>
				<Layout>
					<RouterProvider router={router} />
				</Layout>
			</ThirdwebProvider>
		</CookiesProvider>
	</React.StrictMode>
);
