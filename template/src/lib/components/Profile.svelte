<script>
  import { config } from '$lib/config';
</script>

<div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
  <div class="relative flex items-center space-x-4">
    <div class="relative">
      <span class="absolute text-green-500 right-1 bottom-1">
        <span class="relative flex h-3 w-3">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
          />
          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
      </span>
      <img
        src={config.receiverImgSrc}
        alt="midjourney generated portrait"
        class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
      />
    </div>
    <div class="flex flex-col leading-tight">
      <div class="text-2xl mt-1 flex items-center">
        <span class="text-gray-700 mr-3">{config.nickName}</span>
      </div>
      <span class="text-lg text-gray-600">{config.fullName}</span>
    </div>
  </div>
</div>
