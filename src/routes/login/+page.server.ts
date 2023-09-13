import type { Actions } from './$types';

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const dataToSend = {
			Email: email,
			Password: password
		};

		try {
			const response = await fetch('http://localhost:5086/Login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dataToSend)
			});

			if (response.ok) {
				console.log(dataToSend);
			} else {
				// Handle error
			}
		} catch (error) {
			// Handle network or other errors
		}

		return { success: true };
	}
} satisfies Actions;
