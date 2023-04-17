import Keyv from 'keyv';
import KeyvRedis from '@keyv/redis';
import Redis from 'ioredis';
import { oraPromise } from 'ora';
import { ChatGPTAPI, ChatGPTError } from 'chatgpt';
import { error, type Actions } from '@sveltejs/kit';
import { OPENAI_API_KEY, REDIS_URL, REDIS_PASSWORD } from '$env/static/private';
import { config } from '$lib/config';

// Define the store outside the actions so it's not re-created on every request
const redisOptions = {
	url: REDIS_URL || 'redis://localhost:6379',
	password: REDIS_PASSWORD || undefined
};
const redisClient = new Redis(redisOptions.url, { password: redisOptions.password });
const store = new KeyvRedis(redisClient);
const messageStore = new Keyv({ store, namespace: 'svelte-chatgpt' });

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const message = formData.get('message');
		const parentMessageId = formData.get('parentMessageId');

		const api = new ChatGPTAPI({
			apiKey: OPENAI_API_KEY,
			messageStore
		});

		const prompt = `${config.promptPrefix}${message}`;

		try {
			const chatMessage = await oraPromise(
				api.sendMessage(prompt, {
					parentMessageId: `${parentMessageId}`
				})
			);

			return chatMessage;
		} catch (err) {
			if (err instanceof ChatGPTError) {
				throw error(err.statusCode || 400, err.message);
			}
		}
	}
};
