<script lang="ts">
	export let className = '';
</script>

<p {...$$restProps} class={`text-xl text-muted-foreground ${className}`}>
	<slot />
</p>
