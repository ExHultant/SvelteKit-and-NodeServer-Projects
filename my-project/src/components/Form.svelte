<script>
	import { products } from '../stores/store.js';

	export let subtitle = '';
	export let button = '';

	let title = '';
	let price = '';
	let stock = '';
	let category = '';
	let rating = '';
	let description = '';

	export const addProduct = async ({ fetch }, newProduct) => {
		const productRes = await fetch('https://dummyjson.com/products/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newProduct)
		});
		const productData = await productRes.json();

		return productData;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const newProduct = {
			title,
			price,
			stock,
			category,
			rating,
			description
		};

		const productData = await addProduct({ fetch: window.fetch }, newProduct);
		console.log(productData);
		window.alert('Producto agregado con éxito');
		products.update((items) => [...items, productData]);
	};
</script>

<div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
	<div class="px-4 sm:px-0">
		<h2 class="text-base font-semibold leading-7 text-gray-900">Añadir Producto</h2>
		<p class="mt-1 text-sm leading-6 text-gray-600">{subtitle}</p>
	</div>

	<form
		on:submit={handleSubmit}
		class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
	>
		<div class="px-4 py-6 sm:p-8">
			<div class="sm:col-span-3">
				<label for="title" class="block text-sm font-medium leading-6 text-gray-900"
					>Nombre de Producto</label
				>
				<div class="mt-2">
					<input
						bind:value={title}
						type="text"
						name="title"
						id="title"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="price" class="block text-sm font-medium leading-6 text-gray-900">Precio</label>
				<div class="mt-2">
					<input
						bind:value={price}
						type="number"
						name="price"
						id="price"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-4">
				<label for="stock" class="block text-sm font-medium leading-6 text-gray-900">Stock</label>
				<div class="mt-2">
					<input
						bind:value={stock}
						id="stock"
						name="stock"
						type="number"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-4">
				<label for="category" class="block text-sm font-medium leading-6 text-gray-900"
					>Categoria</label
				>
				<div class="mt-2">
					<select
						bind:value={category}
						id="category"
						name="category"
						autocomplete="Categoria"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
					>
						<option>Computación</option>
						<option>Electrodomestico</option>
						<option>Otro</option>
					</select>
				</div>
			</div>

			<div class="col-span-full">
				<label for="rating" class="block text-sm font-medium leading-6 text-gray-900">Peso</label>
				<div class="mt-2">
					<input
						bind:value={rating}
						type="number"
						name="rating"
						id="rating"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-2 sm:col-start-1">
				<label for="description" class="block text-sm font-medium leading-6 text-gray-900"
					>Descripción del Producto</label
				>
				<div class="mt-2">
					<textarea
						bind:value={description}
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						name="description"
						id="description"
						cols="30"
						rows="10"
					></textarea>
				</div>
			</div>
		</div>
		<div
			class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
		>
			<button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
			<button
				type="submit"
				class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>{button}</button
			>
		</div>
	</form>
</div>
