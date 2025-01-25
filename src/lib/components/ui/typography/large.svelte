<script lang="ts">
	export let className = '';
</script>

<div {...$$restProps} class={`text-lg font-semibold ${className}`}>
	<slot />
</div>
