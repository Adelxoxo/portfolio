import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'soft-dev',
		company: 'Gimnazija Obala',
		description: "I kicked off my coding journey in the 3rd and 4th years of high school, collaborating on group and solo assignments that laid the groundwork for my later projects, including this portfolio. During that time, I built several responsive web pages, designed and developed a native Android app using Android Studio, and went on to create two web applications and a simple Python desktop app. Through these hands-on projects, I've learned not only technical skills but, more importantly, the importance of teamwork and effective communication.",
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Sarajevo',
		period: { from: new Date(2023, 2, 1) },
		skills: getSkills('cpp', 'python', 'javascript', 'svelte', 'html', 'css'),
		name: 'Software Development',
		color: 'red',
		links: [],
		logo: Assets.Code,
		shortDescription: 'Web and mobile development projects.'
	},
	{
		slug: 'diy-electronics',
		company: 'N/A',
		description: 'Passionate about DIY electronics and embedded systems, with hands-on experience in rapid prototyping and building custom microcontroller-based devices.',
		contract: ContractType.Hobby,
		type: 'Electronics Development',
		location: 'Home',
		period: { from: new Date(2024, 6, 10) },
		skills: getSkills('diy'),
		name: 'DIY Electronics',
		color: 'blue',
		links: [],
		logo: Assets.Esp32,
		shortDescription: 'Creating innovative solutions.'
	},
	{
		slug: 'voice-over-artist',
		company: 'Freelance',
		description: 'Adel Kobić is a voice over artist whose career began in 2018, recording narrations for small-scale projects and debuting as a professional voice over actor in the audio-drama "Merchant of Death" in 2020. Since then, he has lent his voice to various projects, including promotional vidoes, educational and entertaining content. He is known for his multilingual proficiency, which helps to enrich his performances with cultural nuance, and for his versatility and ability to adapt to different styles.',
		contract: ContractType.PartTime,
		type: 'Voice Over',
		location: 'Home',
		period: { from: new Date(2018, 8, 1) },
		skills: getSkills('voiceover', 'audacity', 'flstudio'),
		name: 'Professional Voice Over Artist',
		color: 'lightblue',
		links: [],
		logo: Assets.Voiceover,
		shortDescription: 'Recording professional voiceovers for customers.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
