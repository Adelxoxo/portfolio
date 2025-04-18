import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
			{ to: 'https://github.com/', label: 'GitHub' },
			{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'Repository' },
			{ to: 'https://svelte.dev/', label: 'Svelte' },
			{ to: 'https://www.shadcn-svelte.com/', label: 'Shadcn Svelte' }
		],
		logo: Assets.Unknown,
		name: 'Slick Portfolio With Svelte',
		period: {
			from: new Date()
		},
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Website Template'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'arduino-based-volume-mixer',
		color: '#3cbaf0',
		description:
			"A physical audio control system that uses potentiometers to individually adjust volume levels for different applications, similar to Windows' volume mixer but in hardware form. Features an OLED display showing real-time volume levels as bar graphs for user-specified each channel.",
		shortDescription:
			'Physical Audio Control Interface with Real-Time Visualization',
			links: [
				{ to: 'https://github.com/omriharel/deej', label: 'DeeJ' },
				{ to: 'https://github.com/Adelxoxo/', label: 'Repository' }
			],
		logo: Assets.Arduino,
		name: 'Arduino Volume Mixer',
		period: {
			from: new Date(2024, 7, 1),
		},
		skills: getSkills('diy', 'cpp'),
		type: 'DIY Project',
		screenshots: [
			{
				label: 'screen 1',
				src: '/images/arduino1.webp'
			},
			{
				label: '2',
				src: '/images/arduino2.webp'
			}
		]
	},
	{
		slug: 'arduino-based-video-player',
		color: '#3cbaf0',
		description:
			"A system that enables an Arduino to display video on a small 128x64 OLED screen at about 7 FPS. Uses Python scripts with VLC integration to process and stream video frames to the Arduino in real-time, overcoming the microcontroller's processing limitations.",
		shortDescription:
			'Real-Time Video Streaming Solution via VLC, powered by Arduino',
			links: [
				{ to: 'https://github.com/Adelxoxo/ArduinoVLCplayer', label: 'GitHub' },
			],
		logo: Assets.Arduino,
		name: 'Arduino Video Player',
		period: {
			from: new Date(2024, 9, 1),
			to: new Date(2024, 9, 15)
		},
		skills: getSkills('diy', 'cpp', 'python'),
		type: 'DIY Project',
		screenshots: [
			{
				label: 'Still from the video',
				src: '/images/arduinovlcplayer.webp'
			},
		]
	},
	{
		slug: 'lora-based-wan-node',
		color: '#f0723c',
		description:
			"A long-range wireless communication device built by integrating a LoRa radio chip with an ESP32 microcontroller, housed in a repurposed calculator. Compatible with Meshtastic for mesh networking, allowing communication over distances far greater than traditional Wi-Fi.",
		shortDescription:
			'Long-Range Mesh Network Communication Node',
		links: [
			{ to: 'https://github.com/', label: 'GitHub' },
			{ to: 'https://www.semtech.com/lora', label: 'LoRa' },
			{ to: 'https://meshtastic.org/', label: 'Meshtastic' },
			{ to: 'https://www.espressif.com/en/products/socs/esp32', label: 'ESP32' }
		],
		logo: Assets.Espressif,
		name: 'LoRa-based WAN Node',
		period: {
			from: new Date(2025, 1, 1)
		},
		skills: getSkills('diy', 'cpp'),
		type: 'DIY Project',
		screenshots: [
			{
				label: 'Assembled Node w/ Meshtastic',
				src: '/images/lora1.webp'
			},
			{
				label: 'Internal view',
				src: '/images/lora2.webp'
			},
			{
				label: 'Side view',
				src: '/images/lora3.webp'
			},
			{
				label: 'LoRa Module',
				src: '/images/lora4.webp'
			},
			{
				label: 'LoRa Module',
				src: '/images/lora5.webp'
			}
		]
	},
	{
		slug: 'diy-macro-pad',
		color: '#f0723c',
		description:
			"A budget-friendly customizable macro pad using an ESP32 and 2.8 inch touchscreen display. Sends commands to a computer through a Python interpreter, allowing programmable buttons to trigger keyboard shortcuts and automate workflows for content creation, productivity or any other use.",
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [
			{ to: 'https://github.com/', label: 'GitHub' },
			{ to: 'https://www.espressif.com/en/products/socs/esp32', label: 'ESP32' }],
		logo: Assets.Espressif,
		name: 'DIY Macro Pad',
		period: {
			from: new Date(2025, 2, 1),
			to: new Date(2025, 2, 3)
		},
		skills: getSkills('diy', 'cpp', 'python'),
		type: 'DIY Project',
		screenshots: [
			{
				label: 'Front view',
				src: '/images/macropad.webp'
			}
		]
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
