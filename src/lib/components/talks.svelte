<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	const communities: {
		event: string;
		organization: string;
		topic: string;
	}[] = [
		{
			event: 'Davao Tech Dialogues 2024',
			organization: 'DEVCON Davao Chapter',
			topic: 'Invited as Panel Speaker'
		},
		{
			event: 'Solana Ecosystem Call Davao',
			organization: 'Davao Defi Community',
			topic: 'Opportunities in Tech Communities'
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">💬 Talks</Card.Title>
	</Card.Header>
	{#each communities as community}
		<Card.Content>
			<Card.Title tag="h1" class="text-xl font-bold">{community.organization}</Card.Title>
			<Card.Title class="text-lg font-semibold">
				{community.event}
			</Card.Title>
			<Card.Description>
				{community.topic}
			</Card.Description>
		</Card.Content>
	{/each}
</Card.Root>
