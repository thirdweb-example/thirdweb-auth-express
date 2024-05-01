import axios from "axios";

axios.defaults.withCredentials = true;

type GetOptions = {
	url: string;
	params?: Record<string, string>;
	headers?: Record<string, string>;
};

export async function get({ url, params, headers }: GetOptions) {
	const response = await axios.get(url + "?" + new URLSearchParams(params), {
		headers,
	});

	return response.data;
}

type PostOptions = {
	url: string;
	params: Record<string, unknown>;
	headers?: Record<string, string>;
};

export async function post({ url, params, headers }: PostOptions) {
	const response = await axios.post(url, params, { headers });

	return response.data;
}
