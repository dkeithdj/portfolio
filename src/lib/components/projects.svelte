<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Icon from './icon.svelte';
	import { Button } from '$lib/components/ui/button';

	const projects: {
		title: string;
		description: string;
		link?: string;
		stack: string[];
	}[] = [
		{
			title: 'Floclic',
			description: 'Seemless workflow powered by Solana',
			link: 'https://arena.colosseum.org/projects/explore/floclic',
			stack: ['Rust', 'Next.js']
		},
		{
			title: 'RoastJS',
			description: 'A website that roasts javascript, JS-Free',
			link: 'https://roastjs.denreikeith.xyz',
			stack: ['Python', 'htmx']
		},
		{
			title: 'Azanzar',
			description: 'An application tracking system to streamline hiring process',
			stack: ['Django', 'Python', 'Next.js', 'Postgresql']
		},
		{
			title: 'University of Mindanao Enigma Website',
			description: 'The official website of the University of Mindanao Enigma (under development)',
			link: 'https://umenigma.vercel.app/',
			stack: ['Astro', 'Typescript', 'React', 'Sanity']
		},
		{
			title: "Joe's Ordering System",
			description: 'An intuitive ordering system that utilizes QR codes to order products.',
			link: 'https://github.com/dkeithdj/joes-cafe',
			stack: ['Next.js', 'Typescript', 'tRPC']
		},
		{
			title: 'Nixos Configuration',
			description:
				'A declarative approach to configuring my NixOS system. Heavily inspired by <strong>@EmergentMind</strong> and other existing configurations.',
			link: 'https://github.com/dkeithdj/nix-config',
			stack: ['Nixos']
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">📁 Projects</Card.Title>
	</Card.Header>
	{#each projects as { title, description, link, stack }}
		<Card.Content>
			<Card.Title tag="h1" class="text-xl font-bold">{title}</Card.Title>
			{#if link}
				<Button target="_blank" rel="noopener noreferrer" href={link} variant="link" class="p-0"
					>{link}</Button
				>
			{/if}
			<p>{@html description}</p>
			<div class="mt-2 flex space-x-4">
				{#each stack as tool}
					<Icon icon={tool} className="w-8 h-8" />
				{/each}
			</div>
		</Card.Content>
	{/each}
</Card.Root>
