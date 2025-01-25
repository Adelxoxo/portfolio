<script lang="ts">
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import Title from '../title/title.svelte';

	export let title = 'Title';
</script>

<Title {title} />
<ResponsiveContainer className="flex flex-col flex-1 pb-8">
	<slot />
</ResponsiveContainer>
