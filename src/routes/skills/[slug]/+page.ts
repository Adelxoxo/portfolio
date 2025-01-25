import SkillsData from '$lib/data/skills';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = SkillsData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
