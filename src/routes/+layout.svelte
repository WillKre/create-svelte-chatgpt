<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex-grow flex flex-col p-4 w-full max-w-4xl mx-auto">
		<slot />
	</main>

	<Footer />
</div>
