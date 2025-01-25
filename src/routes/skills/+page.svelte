<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import SkillsData, { groupByCategory } from '$lib/data/skills';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';

	let query = $state('');

	function onSearch(value: string) {
		query = value;
	}

	const groups = $derived(groupByCategory(query));
</script>

<SearchPage title={SkillsData.title} {onSearch}>
	{#if groups.length === 0}
		<EmptyResult />
	{:else}
		<div class="mt-4 flex flex-col gap-14">
			{#each groups as group (group.category.slug)}
				<div class="flex flex-col gap-6">
					<div class="flex flex-row items-center gap-2">
						<Separator class="w-[50px]" />
						<Muted>{group.category.name}</Muted>
						<Separator class="flex-1" />
					</div>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each group.items as item (item.slug)}
							<FancyCard
								bgImg={$mode === 'light' ? item.logo.light : item.logo.dark}
								color={item.color}
								href={href(`/skills/${item.slug}`)}
							>
								<CardContent>
									<CardTitle>{item.name}</CardTitle>
								</CardContent>
							</FancyCard>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>
