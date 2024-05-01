import { ConnectButton } from "thirdweb/react";
import { client } from "../lib/client";
import { LoginPayload, VerifyLoginPayloadParams } from "thirdweb/auth";
import { get, post } from "../lib/api";

export default function ConnectButtonAuth() {
	return (
		<ConnectButton
			theme="dark"
			client={client}
			auth={{
				/**
				 * 	`getLoginPayload` should @return {VerifyLoginPayloadParams} object.
				 * 	This can be generated on the server with the generatePayload method.
				 */
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
				/**
				 * 	`doLogin` performs any logic necessary to log the user in using the signed payload.
				 * 	In this case, this means sending the payload to the server for it to set a JWT cookie for the user.
				 */
				doLogin: async (params: VerifyLoginPayloadParams) => {
					await post({
						url: process.env.AUTH_API + "/login",
						params,
					});
				},
				/**
				 * 	`isLoggedIn` returns true or false to signal if the user is logged in.
				 * 	Here, this is done by calling the server to check if the user has a valid JWT cookie set.
				 */
				isLoggedIn: async () => {
					return await get({
						url: process.env.AUTH_API + "/isLoggedIn",
					});
				},
				/**
				 * 	`doLogout` performs any logic necessary to log the user out.
				 * 	In this case, this means sending a request to the server to clear the JWT cookie.
				 */
				doLogout: async () => {
					await post({
						url: process.env.AUTH_API + "/logout",
					});
				},
			}}
		/>
	);
}
