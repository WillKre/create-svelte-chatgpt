import Redis from 'ioredis';
import Keyv from 'keyv';
import KeyvRedis from '@keyv/redis';

import { REDIS_URL, REDIS_PASSWORD } from '$env/static/private';

export function getMessageStore() {
	let store;

	if (REDIS_URL) {
		const redisOptions = {
			url: REDIS_URL,
			password: REDIS_PASSWORD || undefined
		};
		const redisClient = new Redis(redisOptions.url, {
			password: redisOptions.password
		});
		store = new KeyvRedis(redisClient);
	} else {
		// Use an in-memory store when Redis connection details are not provided
		store = new Map();
	}

	const messageStore = new Keyv({ store, namespace: 'svelte-chatgpt' });

	return messageStore;
}
