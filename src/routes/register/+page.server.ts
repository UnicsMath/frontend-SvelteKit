import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const dataToSend = {
			Username: data.get('username'),
			Email: data.get('email'),
			Password: data.get('password')
		};

		try {
			const response = await fetch('http://localhost:5247/Register', {
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
