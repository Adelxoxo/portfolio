import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		"Multilingual IT student, voiceover artist, and passionate tech enthusiast.",
	links: [
		{ label: 'GitHub', href: 'https://github.com/Adelxoxo', icon: 'i-carbon-logo-github' },
		{ label: 'CastingCallClub', href: 'https://www.castingcall.club/VoiceoverHangover', icon: 'i-carbon-microphone-filled' },
		{ label: 'IMDb', href: 'https://www.imdb.com/name/nm12230813/', icon: 'i-carbon-theater' },
		{ label: 'YouTube', href: 'https://www.youtube.com/@slashedpixel', icon: 'i-carbon-logo-youtube' },
		{ label: 'Email', href: 'mailto:adelkobic@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills().filter((skill) => skill.slug !== 'voiceover');

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
