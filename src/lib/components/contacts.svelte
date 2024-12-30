<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import Icon from './icon.svelte';

	const socials = [
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/denreikeith'
		},
		{
			name: 'GitHub',
			href: 'https://www.github.com/dkeithdj'
		},
		{
			name: 'X',
			href: 'https://www.x.com/_denreikeith'
		},
		{
			name: 'Dev.to',
			href: 'https://dev.to/denrei'
		},
		{
			name: 'Bluesky',
			href: 'https://denreikeith.bsky.social'
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🌐 Keep in tabs!</Card.Title>
	</Card.Header>
	<Card.Content class="flex w-full flex-wrap justify-around space-y-4">
		{#each socials as social}
			<Button
				class="inline-flex w-full"
				variant="secondary"
				href={social.href}
				target="_blank"
				rel="noopener noreferrer"
			>
				{#if social.name !== 'LinkedIn'}
					<Icon icon={social.name} />
				{/if}
				<p class="text-lg">{social.name}</p>
			</Button>
		{/each}
	</Card.Content>
</Card.Root>
