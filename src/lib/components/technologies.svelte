<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Icon from './icon.svelte';

	const technologies = [
		'CSS3',
		'Dart',
		'Go',
		'HTML5',
		'openjdk',
		'JavaScript',
		'Lua',
		'PHP',
		'Python',
		'Rust',
		'GNUBash',
		'TypeScript',
		'Firebase',
		'Vercel',
		'.Net',
		'Django',
		'Flask',
		'Fastify',
		'Flutter',
		'Next.JS',
		'React',
		'TailwindCSS',
		'Web3.js',
		'Postgresql',
		'Linux',
		'VoidLinux',
		'Neovim',
		'Git',
		'Astro',
		'Docker',
		'Svelte',
		'Nixos',
		'Elixir',
		'Svelte',
		'FastAPI',
		'AmazonWebServices'
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🤖 Technologies</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-row flex-wrap justify-center">
		{#each technologies as technology}
			<Icon size="60" icon={technology} className="m-1 md:h-12 md:m-2 lg:h-14 h-8" />
		{/each}
	</Card.Content>
</Card.Root>
