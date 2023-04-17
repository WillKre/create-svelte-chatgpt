<script lang="ts">
	import { config } from '$lib/config';

	export let message: {
		type: string;
		content: string;
	};
	export let messageType: 'sent' | 'received';

	const codeBlockRegex = /```([^`]+)```/g;
	const inlineCodeRegex = /`([^`]+)`/g;
	const hasCodeBlock = codeBlockRegex.test(message.content);
	const hasInlineCode = inlineCodeRegex.test(message.content);

	let formattedContent = message.content.replace(/\n/g, '<br>');

	if (hasCodeBlock) {
		formattedContent = formattedContent.replace(
			codeBlockRegex,
			'<pre style="background-color: #f0f0f0; border-radius: 4px; margin: 8px; font-size: 12px; padding: 8px; white-space: pre-wrap; font-family: monospace; overflow-x: auto;"><code>$1</code></pre>'
		);
	}

	if (hasInlineCode) {
		formattedContent = formattedContent.replace(
			inlineCodeRegex,
			'<code style="background-color: #f0f0f0; border-radius: 4px; padding: 2px 4px; font-family: monospace;">$1</code>'
		);
	}
</script>

<div class={`flex items-end ${messageType === 'sent' ? 'justify-end' : ''}`}>
	<div
		class={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
			messageType === 'sent' ? 'order-1 items-end' : 'order-2 items-start'
		}`}
	>
		<div>
			<span
				class={`px-4 py-2 rounded-lg inline-block ${
					messageType === 'sent'
						? 'rounded-br-none bg-blue-600 text-white'
						: 'rounded-bl-none bg-gray-300 text-gray-600'
				}`}
			>
				{@html formattedContent}
			</span>
		</div>
	</div>
	<img
		src={messageType === 'sent' ? config.senderImgSrc : config.receiverImgSrc}
		alt={messageType === 'sent' ? 'Sender' : 'Receiver'}
		class={`w-6 h-6 rounded-full ${messageType === 'sent' ? 'order-2' : 'order-1'}`}
	/>
</div>
