# Create Svelte ChatGPT

**`create-svelte-chatgpt`** is a project generator for building [SvelteKit](https://kit.svelte.dev/) applications powered by [ChatGPT](https://platform.openai.com/docs/api-reference). It comes with a pre-built example chat interface and other common features integrated.

Features include:

- [ChatGPT](https://platform.openai.com/docs/api-reference) integration using Vercel's [AI](https://github.com/vercel-labs/ai) package, which allows for streamed responses.
- Chat interface using [TailwindCSS](https://tailwindcss.com/) for styling / animations.

## Getting Started

### Installation

```bash
npx create-svelte-chatgpt@latest
```

### Add Environment Variable(s)

Create a `.env` file in the root directory and add your OpenAI API key.

**You can get your API key [here](https://platform.openai.com/account/api-keys) from the OpenAI dashboard.**

```bash
OPENAI_API_KEY=xxx
```

## Demo

https://github.com/WillKre/create-svelte-chatgpt/assets/7396157/de9897bb-28e3-4e71-b142-7ce81afdd264

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
