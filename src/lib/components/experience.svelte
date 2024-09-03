<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	const experiences: {
		title: string;
		position: string;
		period: string;
		description?: string;
	}[] = [
		{
			title: 'Mugna Technologies',
			position: 'Junior DevOps Engineer',
			period: 'September 2024 - Present'
		},
		{
			title: 'Mugna Technologies',
			position: 'Backend Developer Intern',
			period: 'June 2024 - August 2024'
		},
		{
			title: 'Ingenuity Softwares',
			position: 'Backend Developer Intern',
			period: 'April 2024 - May 2024'
		},
		{
			title: 'Aquila Softwares',
			position: 'Junior Software Engineer',
			period: 'September 2023 - December 2023',
			description: 'Assisted in developing the backend of a comprehensive attendance system.'
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🎮️ Experience</Card.Title>
	</Card.Header>
	{#each experiences as { title, position, period, description }}
		<Card.Content>
			<Card.Title tag="h1" class="text-xl font-bold">{title}</Card.Title>
			<Card.Title class="text-lg font-medium">{position}</Card.Title>
			<Card.Description>{period}</Card.Description>

			{#if description}
				<p class="mt-2">{description}</p>
			{/if}
		</Card.Content>
	{/each}
</Card.Root>
