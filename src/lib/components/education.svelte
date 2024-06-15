<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	const schools = [
		{
			name: 'University of Mindanao - Main',
			course: 'Bachelor of Science in Computer Science',
			period: '2021 - Present',
			achievements: ["Dean's Lister (1st - 3rd Year)", 'DOST JLSS Scholar'],
			competitions: [
				{
					title: 'IT Olympiad 2024 - IT Pitching',
					place: '2nd Place'
				},
				{
					title: 'Hack4Gov 2',
					place: '1st Runner Up'
				},
				{
					title: 'IT Olympiad 2023 - Programming Competition',
					place: 'Participant'
				}
			]
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🏫 Education</Card.Title>
	</Card.Header>
	{#each schools as school}
		<Card.Content>
			<Card.Title tag="h1" class="text-xl font-bold">{school.name}</Card.Title>

			<Card.Title class="text-lg font-bold">Achievements</Card.Title>
			<div class="mt-2 flex flex-col">
				{#each school.achievements as achievement}
					<p>🥇 {achievement}</p>
				{/each}
			</div>
			<Card.Title class="text-lg font-bold">Competitions</Card.Title>
			<div class="mt-2 flex flex-col">
				{#each school.competitions as competition}
					<p>🏆️ <strong>{competition.place}</strong>: {competition.title}</p>
				{/each}
			</div>
		</Card.Content>
	{/each}
</Card.Root>
