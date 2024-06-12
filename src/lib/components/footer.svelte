<script>
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
</script>

<footer>
	<div class="flex h-16 items-center justify-center">
		<p class="inline-flex">
			&copy; 2024 Denrei made with
			<img
				class="ml-1 mr-1 mt-1 h-5"
				alt="simple-icon"
				src="https://cdn.simpleicons.org/svelte/{theme}"
			/>
		</p>
	</div>
</footer>
