<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { writable } from 'svelte/store';
	import { enhance } from '$app/forms';
	import TextArea from '$lib/components/TextArea.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import Message from '$lib/components/Message.svelte';

	type Message = {
		type: 'received' | 'sent';
		content: string;
		isLoading?: boolean;
	};

	const messages = writable<Message[]>([]);
	let parentMessageId = '';
	let messageContainer: HTMLElement | null = null;

	function addMessage(message: Message, replaceLast = false) {
		messages.update((currentMessages) =>
			replaceLast ? [...currentMessages.slice(0, -1), message] : [...currentMessages, message]
		);
	}

	function scrollToBottom() {
		if (messageContainer) {
			messageContainer.scroll({
				top: messageContainer.scrollHeight,
				behavior: 'smooth'
			});
		}
	}

	afterUpdate(() => {
		scrollToBottom();
	});
</script>

<svelte:head>
	<title>SvelteGPT</title>
</svelte:head>

<div
	class="flex-1 p-6 justify-between flex flex-col h-screen border-2 border-white bg-slate-300 rounded-2xl"
>
	<Profile />

	<div
		bind:this={messageContainer}
		class="max-h-[50vh] flex flex-col space-y-4 p-3 overflow-y-scroll scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch mt-auto"
	>
		{#each $messages as message}
			<Message messageType={message.type} {message} />
		{/each}
	</div>

	<div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
		<div class="relative flex">
			<form
				class="w-full relative"
				method="POST"
				use:enhance={({ form }) => {
					const formData = new FormData(form);
					const message = formData.get('message');
					form.reset();

					addMessage({
						type: 'sent',
						content: message?.toString() || 'N/A'
					});

					addMessage({
						type: 'received',
						content: 'Thinking...',
						isLoading: true
					});

					return async function ({ result }) {
						if (result.type === 'success') {
							// To track the conversation we need to pass the parentMessageId. To do this we can use
							// the parentMessageId from the response and pass it to an invisible input field which
							// is then sent to the server on the subsequent request (see `<input type="hidden"` below)
							parentMessageId = result?.data?.parentMessageId;

							addMessage(
								{
									type: 'received',
									content:
										result.type === 'success'
											? result?.data?.text || 'N/A'
											: 'Something went wrong! Please try again later.'
								},
								true
							);
						}
					};
				}}
			>
				<input type="hidden" name="parentMessageId" bind:value={parentMessageId} />
				<TextArea />
				<SubmitButton />
			</form>
		</div>
	</div>
</div>

<style lang="postcss">
	.scrollbar-w-2::-webkit-scrollbar {
		@apply w-1 h-1;
	}

	.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
		@apply bg-slate-200;
	}

	.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
		@apply bg-slate-400;
	}

	.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
		@apply rounded;
	}
</style>
