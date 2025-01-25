<script lang="ts">
	export let className = '';
</script>

<h1
	{...$$restProps}
	class={`scroll-m-20 text-4xl font-bold tracking-wider lg:text-5xl ${className}`}
>
	<slot />
</h1>
