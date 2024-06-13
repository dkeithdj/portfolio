<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import Icon from './icon.svelte';

	const socials = [
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/denreikieth'
		},
		{
			name: 'GitHub',
			href: 'https://www.github.com/dkeithdj'
		},
		{
			name: 'Gmail',
			href: ''
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🌐 Keep in tabs!</Card.Title>
	</Card.Header>
	<Card.Content class="flex w-full justify-around">
		{#each socials as social}
			<Button
				class="inline-flex"
				variant="secondary"
				href={social.href}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon icon={social.name} />
				<p class="text-lg">{social.name}</p>
			</Button>
		{/each}
	</Card.Content>
</Card.Root>
