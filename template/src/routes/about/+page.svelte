<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <h1 class="mb-8">About</h1>

  <p>
    This is a <a href="https://kit.svelte.dev">SvelteKit</a> app with built-in support for
    <a href="https://tailwindcss.com">TailwindCSS</a> and
    <a href="https://openai.com/api/">ChatGPT</a>. You can make your own by typing the following
    into your command line and following the prompts:
  </p>

  <pre class="my-8">npx create-svelte-chatgpt@latest</pre>

  <p>
    The page you're looking at is purely static HTML, with no client-side interactivity needed.
    Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
    the devtools network panel and reloading.
  </p>

  <h2 class="mt-4 mb-4 font-bold">TailwindCSS</h2>
  <p>
    TailwindCSS is a utility-first CSS framework that allows you to build custom designs quickly and
    easily. It comes preconfigured in this app, allowing you to use its utility classes to style
    your components.
  </p>

  <h2 class="mt-4 mb-4 font-bold">ChatGPT</h2>
  <p>
    ChatGPT is a powerful language model developed by OpenAI. This app leverages ChatGPT to provide
    AI-powered conversation and content generation capabilities. To interact with ChatGPT, we're
    using the
    <a href="https://github.com/transitive-bullshit/chatgpt-api">chatgpt-api</a> package through the
    use of
    <a href="https://kit.svelte.dev/docs/form-actions">Svelte Form Actions</a> and Redis (via
    <a href="https://github.com/jaredwray/keyv">Keyv</a>) to achieve persistance.
  </p>
</div>
