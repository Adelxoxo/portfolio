<script>
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Large from '$lib/components/ui/typography/large.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
</script>

<div class="flex flex-1 flex-col items-center justify-center gap-2">
	<Icon className="text-3xl" icon="i-carbon-ai-status-failed" />
	<Large>Hmmm...</Large>
	<Muted>The content you are looking for does not exist...</Muted>
</div>
