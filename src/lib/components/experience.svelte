<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	const experiences = [
		{
			title: 'Azanzar',
			description: 'An application tracking system for '
		}
	];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🎮️ Experience</Card.Title>
	</Card.Header>
	<Card.Content>
		<p>Exeprience 1</p>
		<p>Exeprience 2</p>
	</Card.Content>
</Card.Root>
