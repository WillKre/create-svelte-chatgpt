import { oraPromise } from 'ora';
import { ChatGPTAPI, ChatGPTError } from 'chatgpt';
import { error, type Actions } from '@sveltejs/kit';
import { OPENAI_API_KEY } from '$env/static/private';
import { config } from '$lib/config';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const message = formData.get('message');
		const api = new ChatGPTAPI({
			apiKey: OPENAI_API_KEY,
			debug: false
		});

		const prompt = `You must speak and articulate like ${config.fullName}, please respond to the following message from his perspective as if you were in a conversation: ${message}`;

		try {
			const chatMessage = await oraPromise(api.sendMessage(prompt), {
				text: prompt
			});

			return chatMessage;
		} catch (err) {
			if (err instanceof ChatGPTError) {
				throw error(err.statusCode || 400, err.message);
			}
		}
	}
};
