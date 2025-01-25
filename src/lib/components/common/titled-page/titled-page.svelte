<script lang="ts">
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import BasePage from '../base-page/base-page.svelte';

	export let title = 'Title';
</script>

<BasePage {title}>
	<H1 className="text-center py-16">{title}</H1>
	<div class="flex flex-1 flex-col gap-5 px-4">
		<slot />
	</div>
</BasePage>
