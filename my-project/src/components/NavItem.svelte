<script>
	export let href;
	export let icon;
	export let label;
</script>

<li>
	<a
		{href}
		class="text-gray-400 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:text-white hover:bg-gray-800"
	>
		<svg
			class="h-6 w-6 shrink-0"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			aria-hidden="true"
		>
			{@html icon}
		</svg>
		{label}
	</a>
</li>
