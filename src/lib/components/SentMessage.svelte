<script lang="ts">
	export let message: {
		id: number;
		type: string;
		content: string;
		timestamp: string;
	};
</script>

<div class="chat-message">
	<div class="flex items-end justify-end">
		<div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
			<div>
				<span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
					{message.content}
				</span>
			</div>
		</div>
		<img
			src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
			alt="My profile"
			class="w-6 h-6 rounded-full order-2"
		/>
	</div>
</div>
