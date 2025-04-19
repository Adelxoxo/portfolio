import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Gimnazija Obala',
		description: 'Gimnazija Obala is a high school located in Sarajevo, Bosnia and Herzegovina. I am currently enrolled in the 4th year of the IT class.',
		location: 'Bosnia and Herzegovina',
		logo: Assets.Obala,
		name: '',
		organization: 'Sarajevo',
		period: { from: new Date(2021, 8, 1) },
		shortDescription: '',
		slug: 'high-school',
		subjects: ['Software Engineering', 'General Programming', 'Web Development', 'Mobile App Development', 'German', 'English']
	},
];

const EducationData = { title, items };

export default EducationData;
