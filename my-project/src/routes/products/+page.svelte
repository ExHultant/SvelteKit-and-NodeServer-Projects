<script>
	import { products as productsStore } from '../../stores/store.js';
	export let data = [];
	let { products } = data;
	const deleteProduct = async (productId) => {
		const response = await fetch(`https://dummyjson.com/products/${productId}`, {
			method: 'DELETE'
		});
		const deletedProduct = await response.json();

		products = products.filter((product) => product.id !== productId);

		return deletedProduct;
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
						{#if $productsStore.length > 0}
							{#each $productsStore as product}
								<tr>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.title}</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>$ {product.price}</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.stock}</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>{product.category}</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.rating}</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>{product.description}</td
									>
									<td
										class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
									>
										<button
											on:click={() => deleteProduct(product.id)}
											class="text-indigo-600 hover:text-indigo-900"
										>
											Eliminar<span class="sr-only">, {product.title}</span></button
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
						{:else}
							<p>No hay productos disponibles.</p>
						{/if}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
