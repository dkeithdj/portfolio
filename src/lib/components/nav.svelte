<script lang="ts">
	import ThemeSwitch from '$lib/components/theme-switch.svelte';
	import { mode } from 'mode-watcher';
	import { beforeUpdate, afterUpdate } from 'svelte';

	let theme = $mode || 'dark';
	beforeUpdate(() => {
		if ($mode === undefined) theme = 'dark';
	});
	afterUpdate(() => {
		if ($mode === undefined) theme = 'dark';
		theme = $mode || 'dark';
	});
</script>

<div class="w-full max-w-3xl">
	<nav class=" my-4 flex max-w-3xl items-center justify-between">
		<img src="/{theme}-rounded.png" alt="logo" class="h-10 w-10" />
		<p class="text-2xl">denreikeith</p>
		<ThemeSwitch />
	</nav>
</div>
