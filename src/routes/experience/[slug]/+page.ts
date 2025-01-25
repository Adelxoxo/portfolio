import ExperienceData from '$lib/data/experience';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = ExperienceData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
