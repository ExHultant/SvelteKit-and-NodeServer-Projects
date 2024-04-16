import { PUBLIC_API_URL } from '$env/static/public';

export const actions = {
	default: async ({ request }) => {
		try {
			let formData = await request.formData();
			let data = Object.fromEntries(formData.entries());

			let response = await fetch(`${PUBLIC_API_URL}/users`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					name: data.name,
					email: data.email,
					age: data.age,
					lastname: data.lastname
				})
			});

			if (response.ok) {
				return {
					status: 201,
					body: { message: 'Usuario agregado correctamente' }
				};
			} else {
				return {
					status: response.status,
					body: { error: 'Error al agregar el usuario' }
				};
			}
		} catch (error) {
			console.error('Error al agregar usuario:', error);
			return {
				status: 500,
				body: { error: 'Error al agregar el usuario' }
			};
		}
	}
};
