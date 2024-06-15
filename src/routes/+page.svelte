<script lang="ts">
	import ContactForm from '$lib/components/contact-form.svelte';
	import Contacts from '$lib/components/contacts.svelte';
	import Education from '$lib/components/education.svelte';
	import Experience from '$lib/components/experience.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Projects from '$lib/components/projects.svelte';
	import Technologies from '$lib/components/technologies.svelte';

	import type { PageData } from './$types.js';
	export let data: PageData;
</script>

<div class="mx-auto max-w-3xl space-y-4">
	<Contacts />
	<Hero />
	<Experience />
	<Projects />
	<Technologies />
	<Education />

	<ContactForm data={data.form} />
</div>
