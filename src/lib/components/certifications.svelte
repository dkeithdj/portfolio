<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';

	const certifications = [
		{
			title: 'IT Specialist: Java',
			image: '/it-specialist-java.png',
			link: 'https://www.credly.com/badges/220125fc-8048-471e-b2b3-eb3f06fdbb90/public_url'
		},
		{
			title: 'IT Specialist: Database',
			image: '/it-specialist-databases.png',
			link: 'https://www.credly.com/badges/5fda13bd-2796-405c-8bed-7f4e80e38644/public_url'
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">📑 Certifications</Card.Title>
	</Card.Header>

	<div class="flex flex-col items-center p-6 pt-0 sm:flex-row sm:justify-around">
		{#each certifications as { title, image, link }}
			<div class="flex flex-col justify-center">
				<div class="mb-2">
					<img width="200" height="200" src={image} alt={title} class="h-40 w-40" />
				</div>
				<div class="mb-2 text-center">
					<Button href={link} target="_blank" rel="noopener noreferrer">Verify</Button>
				</div>
			</div>
		{/each}
	</div>
</Card.Root>
