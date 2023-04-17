<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { enhance } from '$app/forms';
	import TextArea from '$lib/components/TextArea.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import Message from '$lib/components/Message.svelte';

	type Message = {
		type: 'received' | 'sent';
		content: string;
	};

	let messages: Message[] = [];
	let parentMessageId = '';
	let messageContainer: HTMLElement | null = null;

	function addMessage(message: Message) {
		messages = [...messages, message];
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
		{#each messages as message}
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

					return async function ({ result }) {
						if (result.type === 'success') {
							// To track the conversation we need to pass the parentMessageId. To do this we can
							// use the parentMessageId from the response and pass it to an invisible input field
							// which is then sent to the server on the subsequent request (see `type="hidden"` below)
							parentMessageId = result?.data?.parentMessageId;

							addMessage({
								type: 'received',
								content:
									result.type === 'success'
										? result?.data?.text || 'N/A'
										: 'Something went wrong! Please try again later.'
							});
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

<style>
	.scrollbar-w-2::-webkit-scrollbar {
		width: 0.25rem;
		height: 0.25rem;
	}

	.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
		--bg-opacity: 1;
		background-color: #f7fafc;
		background-color: rgba(247, 250, 252, var(--bg-opacity));
	}

	.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
		--bg-opacity: 1;
		background-color: #edf2f7;
		background-color: rgba(237, 242, 247, var(--bg-opacity));
	}

	.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
		border-radius: 0.25rem;
	}
</style>
