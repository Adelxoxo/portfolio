<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import FancyBanner from '$lib/components/common/fancy-banner/fancy-banner.svelte';
	import EmptyMarkdown from '$lib/components/common/markdown/empty-markdown.svelte';
	import Markdown from '$lib/components/common/markdown/markdown.svelte';
	import ScreenshotCard from '$lib/components/common/screenshot/screenshot-card.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import Assets from '$lib/data/assets';
	import type { Education } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear } from '$lib/utils';
	import { mode } from 'mode-watcher';

	let { data }: { data: { item?: Education } } = $props();

	let title = $derived(`${data?.item?.name ?? 'Not Found'} - Skills`);
	let banner = $derived(
		($mode == 'dark' ? data?.item?.logo.dark : data.item?.logo.light) ?? Assets.Unknown.light
	);

	let duration = $derived(
		`${getMonthAndYear(data.item?.period.from)} - ${getMonthAndYear(data.item?.period.to)} · ${computeExactDuration(
			data.item?.period.from ?? new Date(),
			data.item?.period.to
		)}`
	);
</script>

<BasePage {title}>
	{#if !data.item}
		<EmptyResult />
	{:else}
		<FancyBanner img={banner}>
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1>{data.item.degree}</H1>
				<Muted>{data.item.organization} · {data.item.location}</Muted>
				<Muted><Muted>{duration}</Muted></Muted>
				<Separator />
				<div class="flex flex-row flex-wrap justify-center gap-2">
					{#each data.item.subjects as subject (subject)}
						<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
							<Muted>{subject}</Muted>
						</Badge>
					{/each}
				</div>
			</div>
		</FancyBanner>
		<Separator />
		{#if data.item.description.trim()}
			<Markdown content={data.item.description} />
		{:else}
			<EmptyMarkdown />
		{/if}
		<Separator />
		<div class="flex flex-col gap-2 px-4 pt-4">
			{#if data.item.screenshots && data.item.screenshots.length > 0}
				<Muted>Screenshots</Muted>
				<div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{#each data.item.screenshots as img, index (index)}
						<ScreenshotCard item={img} />
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</BasePage>
