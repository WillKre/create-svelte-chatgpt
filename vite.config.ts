import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
	plugins: [sveltekit(), wasm()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
