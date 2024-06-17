<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	const talks: {
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
	{#each talks as { event, organization, topic }}
		<Card.Content>
			<Card.Title tag="h1" class="text-xl font-bold">{organization}</Card.Title>
			<Card.Title class="text-lg font-semibold">
				{event}
			</Card.Title>
			<Card.Description>
				{topic}
			</Card.Description>
		</Card.Content>
	{/each}
</Card.Root>
