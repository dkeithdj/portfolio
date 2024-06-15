<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Contacts from '$lib/components/contacts.svelte';
	import Experience from '$lib/components/experience.svelte';
	import Projects from '$lib/components/projects.svelte';
	import ContactForm from '$lib/components/contact-form.svelte';

	import type { PageData } from './$types.js';
	export let data: PageData;
</script>

<div class="mx-auto max-w-3xl space-y-4">
	<Contacts />
	<Hero />
	<Experience />
	<Projects />
	<ContactForm data={data.form} />
</div>
