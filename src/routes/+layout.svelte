<script>
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
	import { ModeWatcher } from 'mode-watcher';

	const title = "Denrei's Portfolio";
</script>

<ModeWatcher defaultMode={'dark'} />

<svelte:head>
	<title>{title}</title>
</svelte:head>
<main class="mx-8 flex h-screen flex-col">
	<Nav />
	<section class="flex-grow"><slot /></section>
	<Footer />
</main>
