<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import ExperienceCard from '$lib/components/experience/experience-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import ExperienceData from '$lib/data/experience';

	let search = $state('');

	let result = $derived(
		ExperienceData.items.filter(
			(it) =>
				it.name.toLowerCase().includes(search.toLowerCase()) ||
				it.company.toLowerCase().includes(search.toLowerCase()) ||
				it.description.toLowerCase().includes(search)
		)
	);

	const onSearch = (query: string) => (search = query);
</script>

<SearchPage title={ExperienceData.title} {onSearch}>
	{#if result.length === 0}
		<EmptyResult />
	{:else}
		<div class="flex flex-col gap-6 lg:gap-0">
			{#each result as it, index (it.slug)}
				<div class={`flex ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
					<div class="flex flex-1 flex-col justify-center lg:py-[50px]">
						<ExperienceCard {it} />
					</div>
					<div
						class="hidden h-[full] min-w-0 flex-shrink-0 flex-col items-center lg:flex"
						style="--color: hsl(var(--border) / var(--tw-border-opacity, 1)); --icon: hsl(var(--foreground) / var(--tw-border-opacity, 1))"
					>
						<div class="w-[1px] flex-1 bg-[--color]"></div>
						<div class="my-2 text-[--icon]">
							<Icon icon="i-carbon-radio-button-checked" />
						</div>
						<div class="w-[1px] flex-1 bg-[--color]"></div>
					</div>
					<div class="hidden min-w-0 flex-1 flex-shrink-0 flex-row lg:flex"></div>
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>
