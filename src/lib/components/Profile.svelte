<script>
	import { config } from '$lib/config';
</script>

<div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
	<div class="relative flex items-center space-x-4">
		<div class="relative">
			<span class="absolute text-green-500 right-0 bottom-0">
				<svg width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
					<circle cx="20" cy="20" fill="none" r="10" stroke="limegreen" stroke-width="4">
						<animate
							attributeName="r"
							from="8"
							to="20"
							dur="1.5s"
							begin="0s"
							repeatCount="indefinite"
						/>
						<animate
							attributeName="opacity"
							from="1"
							to="0"
							dur="1.5s"
							begin="0s"
							repeatCount="indefinite"
						/>
					</circle>
					<circle cx="20" cy="20" fill="limegreen" r="10" />
				</svg>
			</span>
			<span class="absolute right-0 bottom-0 pulsating" />
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
