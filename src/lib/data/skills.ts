import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Media Production', slug: 'av-production' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
    ...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
    return items.filter(
        (it) =>
            it.category?.slug !== 'lang' && // exclude skills with the 'lang' category
            (slugs.length === 0 ? true : slugs.includes(it.slug))
    );
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'ba',
		color: 'blue',
		description:
			"As a native Bosnian speaker, I possess comprehensive mastery of the language. My proficiency is validated through two published works in ISSN 2233-1905 under my name. My deep understanding of Bosnian has provided an exceptional foundation for language acquisition due to Bosnia's rich historical influences from various empires and kingdoms.",
		logo: Assets.Bosnian,
		name: 'Bosnian',
		category: 'lang'
	}),
	defineSkill({
		slug: 'eng',
		color: 'red',
		description:
			"My English proficiency matches my native Bosnian level, having been immersed in the language since age 4 through cartoons, television, movies, and internet content. I speak with an American English vernacular and I am well-versed in other English accents, which I've demonstrated through various voiceover and voice acting roles.",
		logo: Assets.English,
		name: 'English',
		category: 'lang'
	}),
	defineSkill({
		slug: 'ger',
		color: 'yellow',
		description:
			"German was my first foreign language, acquired naturally in early childhood through German-dubbed cartoons. I later complemented this immersion with formal education through primary and secondary school, participating in the DSD program with qualifications in: Leseverstehen (Reading Comprehension, A2 level), Hörverstehen (Listening Comprehension, B1 level), Schriftliche Kommunikation (Written Communication, A2 level), and Mündliche Kommunikation (Oral Communication, B1 level).",
		logo: Assets.German,
		name: 'German',
		category: 'lang'
	}),
	defineSkill({
		slug: 'ru',
		color: 'red',
		description:
			"I began learning Russian at age 13 through online gaming interactions, achieving intermediate proficiency within just three months. My understanding has since expanded through Russian literature, poetry, and direct communication with native speakers. The language's grammatical similarity to Bosnian facilitated my rapid acquisition. Learning Russian has enabled many meaningful connections with Russian speakers across a vast geography; from Kaliningrad and Minsk to Siberian cities like Novosibirsk, and everything in between.",
		logo: Assets.Russian,
		name: 'Russian',
		category: 'lang'
	}),
	defineSkill({
		slug: 'ua',
		color: 'yellow',
		description:
			"Building on my Slavic language foundation, Ukrainian came naturally through exposure after learning Russian and leveraging my native Bosnian knowledge. While my speaking ability is at an intermediate level, I fully comprehend both spoken and written Ukrainian.",
		logo: Assets.Ukrainian,
		name: 'Ukrainian',
		category: 'lang'
	}),

	defineSkill({
		slug: 'voiceover',
		color: 'gray',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Voiceover,
		name: 'Voiceover',
		category: 'av-production'
	}),
	defineSkill({
		slug: 'veg',
		color: '#3c5af0',
		description:
			'Vegas Pro is a professional video editing software package for non-linear editing (NLE), designed to run on the Microsoft Windows operating system.',
		logo: Assets.VegasPro,
		name: 'Vegas Pro',
		category: 'av-production'
	}),
	defineSkill({
		slug: 'flstudio',
		color: 'orange',
		description: "",
		logo: Assets.FLStudio,
		name: 'FL Studio',
		category: 'av-production'
	}),
	defineSkill({
		slug: 'audacity',
		color: 'yellow',
		description:
			"",
		logo: Assets.Audacity,
		name: 'Audacity',
		category: 'av-production'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
