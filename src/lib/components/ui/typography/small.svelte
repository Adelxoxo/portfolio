<script lang="ts">
	export let className = '';
</script>

<small {...$$restProps} class={`text-sm font-medium leading-none ${className}`}>
	<slot />
</small>
