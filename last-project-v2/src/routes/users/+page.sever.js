import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load() {
	try {
		const req = await fetch(`${PUBLIC_API_URL}/users`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});
		const data = await req.json();
		if (req.ok) {
			return { users: data };
		} else {
			console.error('Error al cargar los Usuarios:', data);
			return {
				error: 'Error al cargar los Usuarios'
			};
		}
	} catch (error) {
		console.error('Error de conexión:', error);
		return {
			error: 'Error de conexión'
		};
	}
}
