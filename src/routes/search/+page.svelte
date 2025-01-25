<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import AvatarFallback from '$lib/components/ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte';
	import Avatar from '$lib/components/ui/avatar/avatar.svelte';
	import { CardContent, CardTitle } from '$lib/components/ui/card';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import Large from '$lib/components/ui/typography/large.svelte';
	import Assets from '$lib/data/assets';
	import { NAMED_COLORS } from '$lib/data/colors';
	import EducationData from '$lib/data/education';
	import ExperienceData from '$lib/data/experience';
	import ProjectsData from '$lib/data/projects';
	import SkillsData from '$lib/data/skills';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';

	type Item = {
		name: string;
		logo: string;
		link: string;
		color: string;
	};

	type Group = {
		icon: `i-carbon-${string}`;
		name: string;
		items: Array<Item>;
	};

	let search = $state('');

	const getResult = (q: string): Array<Group> => {
		const skills = SkillsData.items.filter((it) => it.name.toLowerCase().includes(q.toLowerCase()));
		const projects = ProjectsData.items.filter((it) =>
			it.name.toLowerCase().includes(q.toLowerCase())
		);
		const experience = ExperienceData.items.filter((it) =>
			it.name.toLowerCase().includes(q.toLowerCase())
		);
		const education = EducationData.items.filter((it) =>
			it.name.toLowerCase().includes(q.toLowerCase())
		);

		const groups: Array<Group> = [];

		if (skills.length) {
			groups.push({
				icon: 'i-carbon-assembly-cluster',
				name: 'Skills',
				items: skills.map((it) => ({
					name: it.name,
					logo: $mode === 'dark' ? it.logo.dark : it.logo.light,
					link: `/skills/${it.slug}`,
					color: it.color
				}))
			});
		}

		if (projects.length) {
			groups.push({
				icon: 'i-carbon-cube',
				name: 'Projects',
				items: projects.map((it) => ({
					name: it.name,
					logo: $mode === 'dark' ? it.logo.dark : it.logo.light,
					link: `/projects/${it.slug}`,
					color: it.color
				}))
			});
		}

		if (experience.length) {
			groups.push({
				icon: 'i-carbon-development',
				name: 'Experience',
				items: experience.map((it) => ({
					name: it.name,
					logo: $mode === 'dark' ? it.logo.dark : it.logo.light,
					link: `/experience/${it.slug}`,
					color: it.color
				}))
			});
		}

		if (education.length) {
			groups.push({
				icon: 'i-carbon-education',
				name: 'Education',
				items: education.map((it) => ({
					name: it.degree,
					logo: $mode === 'dark' ? it.logo.dark : it.logo.light,
					link: `/education/${it.slug}`,
					color: NAMED_COLORS.gray
				}))
			});
		}

		return groups;
	};

	let result = $derived(getResult(search));

	const onSearch = (query: string) => (search = query);
</script>

<SearchPage title="Search" {onSearch}>
	{#if result.length === 0}
		<EmptyResult />
	{:else}
		<div class="mt-8 flex flex-col gap-12">
			{#each result as group (group.name)}
				<div class="flex flex-col gap-8">
					<div class="flex flex-row items-center gap-6">
						<div class="flex flex-row gap-2">
							<Large>
								<Icon icon={group.icon} />
							</Large>
							<Large>{group.name}</Large>
						</div>
						<Separator class="flex-1" />
					</div>
					<div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{#each group.items as item (item.link)}
							<FancyCard color={item.color} href={href(item.link)}>
								<CardContent class="flex flex-row items-center gap-4">
									<Avatar>
										<AvatarFallback>
											<img src={Assets.Unknown.light} alt={item.name} />
										</AvatarFallback>
										<AvatarImage src={item.logo} />
									</Avatar>
									<Tooltip openDelay={300}>
										<TooltipTrigger>
											<CardTitle class="line-clamp-2 truncate text-ellipsis text-left"
												>{item.name}</CardTitle
											>
										</TooltipTrigger>
										<TooltipContent>{item.name}</TooltipContent>
									</Tooltip>
								</CardContent>
							</FancyCard>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>
