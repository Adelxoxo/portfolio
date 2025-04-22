import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
        slug: 'savings-calculator',
        color: 'orange',
        description:
            'Website made for a school project. Savings calculator web application that allows users to input their income and expenses, and calculates their savings over time. The website is responsive and works on all devices.',
        shortDescription:
            'Savings calculator web application using Flask.',
        links: [
            { to: 'https://github.com/Adelxoxo', label: 'GitHub' },
        ],
        logo: Assets.HTML,
        name: 'Savings Planner (School Project)',
        period: {
            from: new Date(2025, 3, 12)
        },
        skills: getSkills('html', 'css', 'python'),
        type: 'Website',
        screenshots: [
			{
				label: 'Dashboard',
				src: '/images/planer3.webp'
			},
			{
				label: 'Income Page',
				src: '/images/planer5.webp'
			},
            {
                label: 'Expenses page',
                src: '/images/planer1.webp'
            },
			{
				label: 'Login/Register',
				src: '/images/planer2.webp'
			},
			{
				label: 'Calculator',
				src: '/images/planer4.webp'
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
            { to: 'https://github.com/Adelxoxo', label: 'GitHub' },
            { to: 'https://www.espressif.com/en/products/socs/esp32', label: 'ESP32' }
        ],
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
    },
    {
        slug: 'lora-based-wan-node',
        color: '#f0723c',
        description:
            "A long-range wireless communication device built by integrating a LoRa radio chip with an ESP32 microcontroller, housed in a repurposed calculator. Compatible with Meshtastic for mesh networking, allowing communication over distances far greater than traditional Wi-Fi.",
        shortDescription:
            'Long-Range Mesh Network Communication Node',
        links: [
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
        slug: 'arduino-based-video-player',
        color: '#3cbaf0',
        description:
            "A system that enables an Arduino to display video on a small 128x64 OLED screen at about 7 FPS. Uses Python scripts with VLC integration to process and stream video frames to the Arduino in real-time, overcoming the microcontroller's processing limitations.",
        shortDescription:
            'Real-Time Video Streaming Solution via VLC, powered by Arduino',
        links: [
            { to: 'https://github.com/Adelxoxo/ArduinoVLCplayer', label: 'GitHub' }
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
            }
        ]
    },
    {
        slug: 'legacy-page',
        color: '#c3005d',
        description:
            'Website made for a school project. Entirely built with HTML and CSS, it serves as something of an about me and is live on my github pages. The website is responsive and works on all devices.',
        shortDescription:
            'Website for a school project in regular HTML and CSS',
        links: [
            { to: 'https://github.com/Adelxoxo', label: 'GitHub' },
            { to: 'https://github.com/Adelxoxo/Adelxoxo.github.io', label: 'Repository' },
            { to: 'https://adelxoxo.github.io/', label: 'Live Page' }
        ],
        logo: Assets.HTML,
        name: 'Hobby Website (School Project)',
        period: {
            from: new Date(2024, 9, 1),
            to: new Date(2024, 9, 1)
        },
        skills: getSkills('html', 'css'),
        type: 'Website',
        screenshots: [
            {
                label: 'Front page',
                src: '/images/website.png'
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
            { to: 'https://github.com/omriharel/deej', label: 'Repository' }
        ],
        logo: Assets.Arduino,
        name: 'Arduino Volume Mixer',
        period: {
            from: new Date(2024, 7, 1)
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
        slug: 'cms-website',
        color: '#c3005d',
        description:
            'Old personal project. The website is a content management system that allows users to create, edit, and manage their own content. It is built using the Symfony framework and the Twig template engine.',
        shortDescription:
            'Custom CMS Website built with Symfony and Twig',
        links: [
            { to: 'https://github.com/Adelxoxo', label: 'GitHub' },
            { to: 'https://github.com/Adelxoxo/Infohub', label: 'Repository' },
            { to: 'https://twig.symfony.com/', label: 'Twig Template Engine' },
            { to: 'https://symfony.com/', label: 'Symfony' }
        ],
        logo: Assets.Symfony,
        name: 'Custom CMS Website',
        period: {
            from: new Date(2023, 10, 18),
            to: new Date(2023, 10, 26)
        },
        skills: getSkills('html', 'css', 'php', 'symfony', 'twig'),
        type: 'Website',
        screenshots: [
            {
                label: 'Front page',
                src: '/images/infohub.jpg'
            },
            {
                label: 'Admin panel',
                src: '/images/infohub2.png'
            },
            {
                label: 'Demo 1',
                src: '/images/infohub1.gif'
            },
            {
                label: 'Demo 2',
                src: '/images/infohub2.gif'
            }
        ]
    },
	{
        slug: 'legacy-school-project',
        color: '#c3005d',
        description:
            'Website made for a school project. This is my first ever project with PHP and MySQL, the idea is to create a website that allows for users to connect with workers and their services.',
        shortDescription:
            'First website made for a school project that includes a database.',
        links: [
            { to: 'https://github.com/Adelxoxo', label: 'GitHub' },
            { to: 'https://github.com/Adelxoxo/zanat', label: 'Repository' }
        ],
        logo: Assets.Php,
        name: 'First PHP Website (School Project)',
        period: {
            from: new Date(2023, 9, 1),
            to: new Date(2023, 10, 1)
        },
        skills: getSkills('html', 'css', 'php'),
        type: 'Website',
        screenshots: [
            {
                label: 'Front page',
                src: '/images/zanat.png'
            }
        ]
    },
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
