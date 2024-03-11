<script>
	import { writable } from 'svelte/store';

	let productos = writable([]);
	fetch('http://localhost:3000/products/')
		.then((res) => res.json())
		.then((data) => {
			productos.set(data);
		})
		.catch((err) => console.error(err));

	const deleteProduct = async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/products/${id}`, {
				method: 'DELETE'
			});

			if (!response.ok) {
				throw new Error('Error al eliminar el producto');
			}

			// Actualiza la lista de productos
			productos.update((currentProductos) =>
				currentProductos.filter((producto) => producto.id !== id)
			);
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="px-4 sm:px-6 lg:px-8">
	<div class="sm:flex sm:items-center">
		<h1 class="font-bold text-4xl">PRODUCTOS</h1>
	</div>
	<div class="mt-8 flow-root">
		<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<table class="min-w-full divide-y divide-gray-300">
					<thead>
						<tr>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Nombre de Producto</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Precio</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Stock</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Categoria</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Peso</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Descripción del Producto</th
							>
							<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
								<span class="sr-only">eliminar</span>
							</th>
							<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
								<span class="sr-only">Editar</span>
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200">
						{#if $productos.length === 0}
							<tr>
								<td colspan="6" class="px-3 py-4 text-sm text-gray-500 text-center"
									>No existen datos en la tabla</td
								>
							</tr>
						{:else}
							{#each $productos as producto}
								<tr>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>{producto.nombre}</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>$ {producto.precio}</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>{producto.cantidad}</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>{producto.categoria}</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{producto.peso}</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>{producto.descripcion}</td
									>
									<td
										class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
									>
										<button
											class="text-indigo-600 hover:text-indigo-900"
											on:click={deleteProduct(producto.id)}
										>
											Eliminar<span class="sr-only">, {producto.name}</span></button
										>
									</td>
									<td
										class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
									>
										<button class="text-indigo-600 hover:text-indigo-900"
											><a href="products/modify">Modificar</a></button
										>
									</td>
								</tr>
							{/each}
						{/if}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
