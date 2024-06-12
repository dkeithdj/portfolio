<script>
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

	const title = "Denrei's Portfolio";
</script>

<ModeWatcher defaultMode={'dark'} />

<svelte:head>
	<link rel="icon" href="/{theme}-rounded.png" />
</svelte:head>

<title>{title}</title>
<main class="mx-8 flex h-screen flex-col">
	<Nav />
	<section class="flex-grow"><slot /></section>
	<Footer />
</main>
