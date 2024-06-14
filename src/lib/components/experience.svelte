<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Icon from './icon.svelte';

	const experiences = [
		{
			title: 'Ingenuity Softwares',
			position: 'Intern',
			period: '',
			description: 'An application tracking system to streamline hiring process',
			stack: ['Django', 'Python', 'Next.js']
		},
		{
			title: "Joe's Ordering System",
			position: 'Junior Software Engineer',
			description: 'An intuitive ordering system that utilizes QR codes to order products',
			stack: ['Next.js', 'Typescript', 'tRPC']
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🎮️ Experience</Card.Title>
	</Card.Header>
	{#each experiences as experience}
		<Card.Content>
			<p>{experience.title}</p>
			<p>{experience.description}</p>
			<div class="flex">
				{#each experience.stack as tool}
					<Icon icon={tool} />
				{/each}
			</div>
		</Card.Content>
	{/each}
</Card.Root>
