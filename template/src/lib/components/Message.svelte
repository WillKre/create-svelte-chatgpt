<script lang="ts">
  import { config } from '$lib/config';
  import Spinner from '$lib/components/Spinner.svelte';
  import { formatMessage } from '$lib/utils/formatMessage';

  export let message: {
    type: string;
    content: string;
    isLoading?: boolean;
  };
  export let messageType: 'sent' | 'received';

  let formattedContent = '';

  $: {
    formattedContent = formatMessage(message.content);
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
        class={`px-4 py-2 rounded-lg inline-block shadow-md ${
          messageType === 'sent'
            ? 'rounded-br-none bg-blue-600 text-white'
            : 'rounded-bl-none bg-gray-300 text-gray-600'
        }`}
      >
        {#if message.isLoading}
          <Spinner />
        {:else}
          {@html formattedContent}
        {/if}
      </span>
    </div>
  </div>

  <img
    src={messageType === 'sent' ? config.senderImgSrc : config.receiverImgSrc}
    alt={messageType === 'sent' ? 'Sender' : 'Receiver'}
    class={`w-6 h-6 rounded-full ${messageType === 'sent' ? 'order-2' : 'order-1'}`}
  />
</div>
