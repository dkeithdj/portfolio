<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	const communities: {
		event?: string;
		organization: string;
		position: string;
		period?: string;
	}[] = [
		{
			organization: 'Blockchain Campus Conference 2024 - Mindanao',
			position: 'Head of Volunteers',
			period: 'August 2024 - October 2024'
		},
		{
			organization: 'Junior Blockchain Education Consortium of the Philippines - UM Davao',
			position: 'Ambassador',
			period: 'July 2024 - Present'
		},
		{
			organization: 'Davao Young Executives',
			position: 'Community Outreach Committee',
			period: 'May 2024 - Present'
		},
		{
			organization: 'Davao Interschool Computer Enthusiasts',
			position: 'Innovations Team',
			period: 'April 2024 - Present'
		},
		{
			organization: 'University of Mindanao Enigma',
			position: 'Co-Founder and President',
			period: 'August 2023 - July 2024 '
		},
		{
			organization: 'CCE Skills Clinic',
			position: 'President',
			period: 'November 2022 - August 2023 '
		},
		{
			event: 'DevFest 2023',
			organization: 'Google Developers Group Davao',
			position: 'Promotions Team',
			period: 'March 2024'
		},
		{
			event: 'AWS Community Day Davao 2023',
			organization: 'AWS User Group PH',
			position: 'Usher Team',
			period: 'September 2023'
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🧑‍🤝‍🧑 Community</Card.Title>
	</Card.Header>
	{#each communities as { event, organization, position, period }}
		<Card.Content>
			<Card.Title tag="h1" class="text-xl font-bold">{organization}</Card.Title>
			<Card.Title class="text-lg font-semibold">
				{#if event}
					{event}:
				{/if}
				{position}</Card.Title
			>
			<Card.Description>
				{period}
			</Card.Description>
		</Card.Content>
	{/each}
</Card.Root>
