<script>
  export let input;
</script>

<textarea
  on:keydown={(e) => {
    const shiftEnter = e.shiftKey && e.key === 'Enter';

    if (shiftEnter) {
      e.stopPropagation();
    } else if (e.key === 'Enter') {
      e.preventDefault();

      if (e.target instanceof HTMLTextAreaElement) {
        e?.target?.form?.requestSubmit();
      }
    }
  }}
  bind:value={$input}
  name="message"
  autocomplete="off"
  placeholder="Write your message!"
  class="w-full max-h-[200px] pr-32 resize-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3"
/>
