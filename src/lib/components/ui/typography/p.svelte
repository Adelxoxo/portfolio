<script lang="ts">
	export let className = '';
</script>

<p {...$$restProps} class={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
	<slot />
</p>
