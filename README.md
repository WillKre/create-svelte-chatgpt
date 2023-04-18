# Create Svelte ChatGPT

**`create-svelte-chatgpt`** is a project generator for building [SvelteKit](https://kit.svelte.dev/) applications powered by [ChatGPT](https://platform.openai.com/docs/api-reference). It comes with a pre-built example chat interface and other common features integrated.

Features include:

- [ChatGPT](https://platform.openai.com/docs/api-reference) integration using [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api).
- [Redis](https://redis.io/) for persistent chat history via [Keyv](https://github.com/jaredwray/keyv).
- [TailwindCSS](https://tailwindcss.com/) for styling.
- [Svelte Form Actions](https://kit.svelte.dev/docs/form-actions) utilized in the chat interface.

## Getting Started

### Installation

```bash
npx create-svelte-chatgpt@latest
```

### Configure ChatGPT

Create a `.env` file in the root directory and add your ChatGPT API key. You can also add a Redis URL and Redis password if you want persistent chat history (e.g. for ChatGPT to remember the past conversation).

```bash
OPENAI_API_KEY=sk-API_KEY_HERE #
REDIS_URL=REDIS_URL_HERE # Optional, can be local or remote using Redis Labs, etc.
REDIS_PASSWORD=REDIS_PASSWORD_HERE # Optional, if applicable
```

## Development

To start a development server:

```bash
npm run dev

# Or start the server and open the app in a new browser tab
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
