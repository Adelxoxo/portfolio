<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Education } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import { Avatar, AvatarFallback } from '../ui/avatar';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import { Badge } from '../ui/badge';
	import { CardContent, CardTitle } from '../ui/card';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { it }: { it: Education } = $props();

	const exactDuration = computeExactDuration(it.period.from, it.period.to);

	let from = $derived(getMonthAndYear(it.period.from));
	let to = $derived(getMonthAndYear(it.period.to));

	let period = $derived(`${from} - ${to}`);

	let location = `${it.organization}, ${it.location}`;
</script>

<FancyCard href={href(`/education/${it.slug}`)}>
	<CardContent class="flex flex-col gap-8 sm:flex-row">
		<Avatar>
			<AvatarFallback>
				<img src={$mode === 'dark' ? Assets.Unknown.dark : Assets.Unknown.light} alt={it.name} />
			</AvatarFallback>
			<AvatarImage src={$mode === 'dark' ? it.logo.dark : it.logo.light} />
		</Avatar>
		<div class="flex flex-col gap-4">
			<CardTitle>{it.degree}</CardTitle>
			<Tooltip openDelay={300}>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-location" />
						<div>{location}</div>
					</Muted>
				</TooltipTrigger>
				<TooltipContent>Location</TooltipContent>
			</Tooltip>
			<Tooltip openDelay={300}>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-calendar" />
						<div>{period}</div>
					</Muted>
				</TooltipTrigger>
				<TooltipContent>Date range</TooltipContent>
			</Tooltip>
			<Tooltip openDelay={300}>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-time" />
						<div>{exactDuration}</div>
					</Muted>
					<TooltipContent side="bottom">Exact duration</TooltipContent>
				</TooltipTrigger>
			</Tooltip>
			<div>
				{ellipsify(it.shortDescription, 150)}
			</div>
			<div class="flex flex-row flex-wrap gap-2">
				{#each it.subjects as subject (subject)}
					<Badge variant="secondary">{subject}</Badge>
				{/each}
			</div>
		</div>
	</CardContent>
</FancyCard>
