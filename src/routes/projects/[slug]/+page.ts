import ProjectsData from '$lib/data/projects';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = ProjectsData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
