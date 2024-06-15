import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from '$lib/schema';
import { ACCESS_KEY } from '$env/static/private';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	contact: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({ ...form.data, access_key: ACCESS_KEY })
		});
		const result = await response.json();
		if (!result.success) {
			return fail(400, {
				form
			});
		}
		// console.log(result);
		// return { success: result.message || 'Success' };
		// return { form };
		return message(form, 'Form submitted successfully');
	}
};
