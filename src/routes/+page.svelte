<script lang="ts">
	import Certifications from '$lib/components/certifications.svelte';
	import Community from '$lib/components/community.svelte';
	import ContactForm from '$lib/components/contact-form.svelte';
	import Contacts from '$lib/components/contacts.svelte';
	import Education from '$lib/components/education.svelte';
	import Experience from '$lib/components/experience.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Projects from '$lib/components/projects.svelte';
	import Talks from '$lib/components/talks.svelte';
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
	<Community />
	<Talks />
	<Certifications />

	<ContactForm data={data.form} />
</div>
