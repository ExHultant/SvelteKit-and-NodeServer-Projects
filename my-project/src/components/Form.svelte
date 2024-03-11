<script>
    export let title = '';
    export let subtitle = '';
	export let button = '';
</script>

<div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
	<div class="px-4 sm:px-0">
		<h2 class="text-base font-semibold leading-7 text-gray-900">{title}</h2>
		<p class="mt-1 text-sm leading-6 text-gray-600">{subtitle}</p>
	</div>

	<form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
		<div class="px-4 py-6 sm:p-8">
			<div class="sm:col-span-3">
				<label for="NameProduct" class="block text-sm font-medium leading-6 text-gray-900"
					>Nombre de Producto</label
				>
				<div class="mt-2">
					<input
						type="text"
						name="NameProduct"
						id="NameProduct"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="number" class="block text-sm font-medium leading-6 text-gray-900">Precio</label>
				<div class="mt-2">
					<input
						type="number"
						name="number"
						id="number"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-4">
				<label for="number" class="block text-sm font-medium leading-6 text-gray-900">Stock</label>
				<div class="mt-2">
					<input
						id="number"
						name="number"
						type="number"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-4">
				<label for="Categoria" class="block text-sm font-medium leading-6 text-gray-900"
					>Categoria</label
				>
				<div class="mt-2">
					<select
						value="Categoria"
						id="Categoria"
						name="Categoria"
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
				<label for="weight" class="block text-sm font-medium leading-6 text-gray-900">Peso</label>
				<div class="mt-2">
					<input
						type="number"
						name="weight"
						id="weight"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-2 sm:col-start-1">
				<label for="city" class="block text-sm font-medium leading-6 text-gray-900"
					>Descripción del Producto</label
				>
				<div class="mt-2">
					<textarea
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						name="descriptionProduct"
						id="descriptionProduct"
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
