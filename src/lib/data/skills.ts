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
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Programming Languages', slug: 'programming-langs' }),
	defineSkillCategory({ name: 'DIY', slug: 'diy' }),
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
			"Voice over is the art of using one's voice to convey a message, emotion, or character in various media. It involves recording spoken content for applications like audiobooks, animations, video games, and commercials. My experience includes narration and voice acting for diverse projects.",
		logo: Assets.Voiceover,
		name: 'Voiceover',
		category: 'av-production'
	}),
	defineSkill({
		slug: 'veg',
		color: '#3c5af0',
		description:
			'Vegas Pro is a professional video editing software package for non-linear editing (NLE), designed to run on the Microsoft Windows operating system. It is my primary tool for video editing, and allows me to produce high-quality videos as seen on the SlashedPixel YouTube channel.',
		logo: Assets.VegasPro,
		name: 'Vegas Pro',
		category: 'av-production'
	}),
	defineSkill({
		slug: 'flstudio',
		color: 'orange',
		description: "FL Studio is a digital audio workstation (DAW) developed by Belgian company Image-Line. It is used for music production, audio editing, and mixing. I use FL Studio for applying vocal effects in post-production if analog effects are unavailable.",
		logo: Assets.FLStudio,
		name: 'FL Studio',
		category: 'av-production'
	}),
	defineSkill({
		slug: 'audacity',
		color: 'yellow',
		description:
			"Audacity is a free, open-source audio editing software that's user-friendly and feature-rich. I use Audacity primarily for recording and editing voiceovers, as it allows for multi-track editing, noise reduction, and various effects. It's an excellent tool for anyone looking to produce high-quality audio content. ",
		logo: Assets.Audacity,
		name: 'Audacity',
		category: 'av-production'
	}),
	defineSkill({
		slug: 'cpp',
		color: '#3c5af0',
		description:
			"C++ is a powerful, general-purpose programming language that supports object-oriented programming. It's commonly used in software development, game programming, and systems engineering. Our school curriculum introduces us to the basics of C++, helping us grasp essential programming structures and problem-solving techniques.",
		logo: Assets.Cpp,
		name: 'C++',
		category: 'programming-langs'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			"Python is a versatile, high-level programming language known for its clear syntax and readability. It's widely used in web development, data analysis, automation, and more. In school, we learn the fundamentals of Python, which lays the groundwork for understanding programming concepts and logic.",
		logo: Assets.Python,
		name: 'Python',
		category: 'programming-langs'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			"Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),

	defineSkill({
		slug: 'diy',
		color: 'green',
		description:
			"DIY electronics involves creating or modifying electronic devices using components like resistors, microcontrollers, and sensors. It's a hands-on way to explore how electronic systems work, fostering projects like building custom gadgets or home automation tools.",	
		logo: Assets.Esp32,
		name: 'DIY Electronics',
		category: 'diy'
	}),
	defineSkill({
		slug: 'php',
		color: 'blue',
		description:
			"PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993. The PHP reference implementation is now produced by The PHP Group.",
		logo: Assets.Php,
		name: 'PHP',
		category: 'programming-langs'
	}),
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
