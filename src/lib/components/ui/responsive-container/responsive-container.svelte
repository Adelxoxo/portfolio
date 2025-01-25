<script lang="ts">
	export let className: string = '';
</script>

<div class={`lg:w-[auto] xl:w-[1024px] xl:self-center ${className}`}><slot /></div>
