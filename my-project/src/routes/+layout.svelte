<script>
	import '../app.css';
	import Sidebar from '../components/Sidebar.svelte';

</script>

<div>
	<Sidebar />
	<main class="py-10 lg:pl-72">
		<div class="px-4 sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>
</div>
