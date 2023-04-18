import Redis from 'ioredis';
import Keyv from 'keyv';
import KeyvRedis from '@keyv/redis';

import { REDIS_URL, REDIS_PASSWORD } from '$env/static/private';

export function getMessageStore() {
	const redisOptions = {
		url: REDIS_URL || 'redis://localhost:6379',
		password: REDIS_PASSWORD || undefined
	};
	const redisClient = new Redis(redisOptions.url, { password: redisOptions.password });
	const store = new KeyvRedis(redisClient);
	const messageStore = new Keyv({ store, namespace: 'svelte-chatgpt' });

	return messageStore;
}
