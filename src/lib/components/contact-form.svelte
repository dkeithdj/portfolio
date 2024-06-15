<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from '$lib/schema';

	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Textarea } from '$lib/components/ui/textarea';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		// delayMs: 5000,
		// timeoutMs: 10000,
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance, message, submitting, delayed, timeout } = form;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h1" class="text-3xl">🤝 Wanna Collaborate?</Card.Title>
	</Card.Header>
	<Card.Content
		><form method="POST" action="?/contact" use:enhance>
			<Form.Field {form} name="name">
				<Form.Control let:attrs>
					<Form.Label>Name</Form.Label>
					<Input {...attrs} bind:value={$formData.name} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="message">
				<Form.Control let:attrs>
					<Form.Label>Message</Form.Label>
					<Textarea
						{...attrs}
						placeholder="Type your message here"
						bind:value={$formData.message}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button>Submit</Form.Button>
			{#if $message}
				<div>{$message}</div>
			{/if}
			{#if $submitting !== $delayed}
				<img class="text-primary" src="/spinner.svg" alt="spinner" />
			{/if}
			{#if $delayed}
				<img class="text-primary" src="/dots.svg" alt="spinner" />
			{/if}
			<img class="text-primary" src="/spinner.svg" alt="spinner" />
			<img class="text-primary" src="/dots.svg" alt="spinner" />
		</form>
	</Card.Content>
</Card.Root>
