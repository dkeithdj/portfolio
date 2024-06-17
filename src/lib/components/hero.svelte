<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Icon from './icon.svelte';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">💫 About Me</Card.Title>
	</Card.Header>
	<Card.Content>
		<p>
			Hey! I'm <span class="font-bold">Den</span>, an aspiring Software Engineer at the University
			of Mindanao taking the Bachelor of Science in Computer Science course. I may have multiple
			interests in tech, but currently I'm focused on web development, particularly on the back-end
			side of things.
		</p>
	</Card.Content>
	<Card.Content
		><p class="inline-flex">
			Also a <Icon icon="vim" /> enjoyer, Linux tinkerer, and a keyboard guy.
		</p>
	</Card.Content>
</Card.Root>
