<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import Icon from './icon.svelte';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🌐 Keep in tabs!</Card.Title>
	</Card.Header>
	<Card.Content>
		<Button
			class="inline-flex"
			variant="secondary"
			href="https://www.linkedin.com/in/denreikieth"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon icon="LinkedIn" />
			<p class="text-lg">LinkedIn</p>
		</Button>
		<Button
			class="inline-flex"
			variant="secondary"
			href="https://www.github.com/dkeithdj"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon icon="GitHub" />
			<p class="text-lg">Github</p>
		</Button>
	</Card.Content>
</Card.Root>
