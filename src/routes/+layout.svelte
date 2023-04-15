<script>
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex-grow flex flex-col p-4 w-full max-w-4xl mx-auto">
		<slot />
	</main>

	<footer class="flex flex-col items-center justify-center py-3">
		<p>Powered by <a href="https://openai.com/" class="font-semibold">OpenAI</a></p>
	</footer>
</div>
