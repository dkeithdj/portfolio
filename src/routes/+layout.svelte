<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import { ModeWatcher, mode } from 'mode-watcher';
	import { beforeUpdate, afterUpdate } from 'svelte';

	let theme = $mode || 'dark';
	beforeUpdate(() => {
		if ($mode === undefined) theme = 'dark';
	});
	afterUpdate(() => {
		if ($mode === undefined) theme = 'dark';
		theme = $mode || 'dark';
	});

	const title = 'Denrei Keith';
</script>

<ModeWatcher defaultMode={'dark'} />

<svelte:head>
	<link rel="icon" href="/{theme}-rounded.png" />
</svelte:head>

<title>{title}</title>
<main class="mx-8 flex h-screen flex-col">
	<div class="flex justify-center"><Nav /></div>
	<section class="flex-grow"><slot /></section>
	<div class="flex justify-center"><Footer /></div>
</main>
