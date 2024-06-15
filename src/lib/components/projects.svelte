<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Icon from './icon.svelte';
	import { Button } from '$lib/components/ui/button';

	const projects = [
		{
			title: 'Azanzar',
			description: 'An application tracking system to streamline hiring process',
			link: '',
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
	{#each projects as project}
		<Card.Content>
			<Card.Title tag="h1" class="text-xl font-bold">{project.title}</Card.Title>
			{#if project.link}
				<Button
					target="_blank"
					rel="noopener noreferrer"
					href={project.link}
					variant="link"
					class="p-0">{project.link}</Button
				>
			{/if}
			<p>{@html project.description}</p>
			<div class="mt-2 flex space-x-4">
				{#each project.stack as tool}
					<Icon icon={tool} className="w-8 h-8" />
				{/each}
			</div>
		</Card.Content>
	{/each}
</Card.Root>
