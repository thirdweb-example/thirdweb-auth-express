import { ConnectButton } from "thirdweb/react";
import { client } from "../lib/client";
import { LoginPayload, VerifyLoginPayloadParams } from "thirdweb/auth";
import { get, post } from "../lib/api";
import { useCookies } from "react-cookie";

export default function ConnectButtonAuth() {
	const [cookies, setCookie, removeCookie] = useCookies();

	return (
		<ConnectButton
			theme="dark"
			client={client}
			auth={{
				getLoginPayload: async (params: {
					address: string;
				}): Promise<LoginPayload> => {
					return get({
						url: process.env.AUTH_API + "/login",
						params: {
							address: params.address,
						},
					});
				},
				doLogin: async (params: VerifyLoginPayloadParams) => {
					const { token } = await post({
						url: process.env.AUTH_API + "/login",
						params,
					});
					setCookie("token", token);
					await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for cookie to set
				},
				isLoggedIn: async () => {
					return await get({
						url: process.env.AUTH_API + "/isLoggedIn",
						headers: {
							Authorization: cookies.token,
						},
					});
				},
				doLogout: async () => {
					removeCookie("token");
				},
			}}
		/>
	);
}
