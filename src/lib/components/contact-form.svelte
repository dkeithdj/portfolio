<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from '$lib/schema';
	import Spinner from '$lib/components/spinner.svelte';

	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Textarea } from '$lib/components/ui/textarea';
	import Dots from './dots.svelte';

	import { toast } from 'svelte-sonner';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdate(event) {
			if (event.result.type === 'success') {
				toast.success(event.form.message);
			} else {
				toast.error('Something went wrong, please try again');
			}
		}
	});

	const { form: formData, enhance, submitting, delayed } = form;
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
			<Form.Button disabled={$submitting || $delayed}>
				{#if $submitting !== $delayed}
					<Spinner />
				{/if}
				{#if $delayed}
					<Dots />
				{/if}
				<p class="ml-1">{$delayed ? 'Sending' : 'Submit'}</p></Form.Button
			>
		</form>
	</Card.Content>
</Card.Root>
