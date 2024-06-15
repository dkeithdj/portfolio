<script lang="ts">
	import { mode } from 'mode-watcher';
	import { afterUpdate } from 'svelte';

	let theme = 'e6ebff';
	afterUpdate(() => {
		if ($mode === 'dark') {
			theme = 'e6ebff';
		}
		if ($mode === 'light') {
			theme = '242528';
		}
	});
	export let size = '24';
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 {size} {size}"
	xmlns="http://www.w3.org/2000/svg"
	style="color: #{theme}"
>
	><style>
		.spinner_S1WN {
			animation: spinner_MGfb 0.8s linear infinite;
			animation-delay: -0.8s;
		}
		.spinner_Km9P {
			animation-delay: -0.65s;
		}
		.spinner_JApP {
			animation-delay: -0.5s;
		}
		@keyframes spinner_MGfb {
			93.75%,
			100% {
				opacity: 0.2;
			}
		}
	</style>
	<circle fill="currentColor" class="spinner_S1WN" cx="4" cy="12" r="3" />
	<circle fill="currentColor" class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3" />
	<circle fill="currentColor" class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3" />
</svg>
