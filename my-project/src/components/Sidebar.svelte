<script>
	import Add from '../assets/icons/add.svelte';
	import Products from '../assets/icons/products.svelte';
	import NavItem from './NavItem.svelte';
</script>

<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
	<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
		<div class="flex h-16 shrink-0 items-center">
			<a href="/">
				<img
					class="h-8 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt="Your Company"
				/>
			</a>
		</div>
		<nav class="flex flex-1 flex-col">
			<ul role="list" class="flex flex-1 flex-col gap-y-7">
				<li>
					<ul role="list" class="-mx-2 space-y-1">
						<NavItem href="/products" label="Productos" active={true} icon={Products} />
						<NavItem href="/products/add" label="Añadir Productos" icon={Add} />
						<NavItem href="/products/modify" label="Modificar Producto" icon={Add} />
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</div>
