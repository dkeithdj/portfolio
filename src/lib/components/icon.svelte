<script lang="ts">
	import { mode } from 'mode-watcher';
	import { afterUpdate } from 'svelte';

	let theme = 'fff';
	afterUpdate(() => {
		if ($mode === 'dark') {
			theme = 'e6ebff';
		}
		if ($mode === 'light') {
			theme = '242528';
		}
	});
	export let className = 'ml-1 mr-1 h-5';
	export let icon = 'simpleicons';
	export let size = '24';
</script>

<img
	width={size}
	height={size}
	class={className}
	alt={icon}
	src="https://cdn.simpleicons.org/{icon}/{theme}"
/>
