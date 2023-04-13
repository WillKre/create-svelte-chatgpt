<script lang="ts">
	export let message: {
		id: number;
		type: string;
		content: string;
		timestamp: string;
	};
</script>

<div class="chat-message">
	<div class="flex items-end">
		<div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
			<div>
				<span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
					{message.content}
				</span>
			</div>
		</div>
		<img
			src="https://metro.co.uk/wp-content/uploads/2021/06/SEI_82190513-e1630942602967.jpg?quality=90&strip=all&zoom=1&resize=480%2C332"
			alt="My profile"
			class="w-6 h-6 rounded-full order-1"
		/>
	</div>
</div>
