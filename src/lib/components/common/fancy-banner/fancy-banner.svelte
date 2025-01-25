<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		img,
		class: className,
		children
	}: { img: string; class?: string; children?: Snippet } = $props();
</script>

<div
	style={`--bg-img:url(${img})`}
	class={`row gradient-cover min-h-[200px] w-full px-4 py-8 text-center sm:min-h-[250px] md:min-h-[300px] md:px-10 lg:min-h-[350px] ${className}`}
>
	<div class="p-x-2 flex size-full flex-1 flex-col items-center justify-center">
		{@render children?.()}
	</div>
</div>

<style>
	.gradient-cover {
		--card-color: hsl(var(--card) / 1);
		--card-color-30: hsl(var(--card) / 0.3);

		background:
			linear-gradient(
				90deg,
				var(--card-color) 0%,
				var(--card-color) 55%,
				var(--card-color-30) 130%
			),
			no-repeat 110% 45% / 50% var(--bg-img);
	}
</style>
