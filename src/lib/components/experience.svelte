<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	const experiences = [
		{
			title: 'Ingenuity Softwares',
			position: 'Backend Developer Intern',
			period: 'April 2024 - May 2024',
			description: ''
		},
		{
			title: 'Aquila Softwares',
			position: 'Junior Software Engineer',
			period: 'September 2023 - December 2023',
			description: 'Assisted in developing the backend of a comprehensive attendance system'
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🎮️ Experience</Card.Title>
	</Card.Header>
	{#each experiences as experience}
		<Card.Content>
			<Card.Title tag="h1" class="text-xl font-bold">{experience.title}</Card.Title>
			<Card.Title class="text-lg font-medium">{experience.position}</Card.Title>
			<Card.Description>{experience.period}</Card.Description>

			{#if experience.description}
				<p class="mt-2">{experience.description}</p>
			{/if}
		</Card.Content>
	{/each}
</Card.Root>
