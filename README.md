# SvelteKit ChatGPT

Everything you need to build a ChatGPT powered Svelte project, powered by [SvelteKit](https://kit.svelte.dev/).

Includes:

- [ChatGPT](https://platform.openai.com/docs/api-reference)
- [SvelteKit Form Actions](https://kit.svelte.dev/docs/form-actions)
- [TailwindCSS](https://tailwindcss.com/)

## Getting Started

Create a `.env` file in the root directory and add your ChatGPT API key, Redis URL, and Redis password:

```bash
OPENAI_API_KEY=sk-API_KEY_HERE
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=redis_password_here
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Contributing

Contributions are welcome! Please create a fork of the repository, make your changes, and submit a pull request.

## License

This project is open-source and available under the MIT License.
