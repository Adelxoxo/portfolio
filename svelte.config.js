import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const base = '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			$lib: './src/lib',
			'@data': './src/lib/data',
			'@components': './src/lib/components',
			'@md': './src/lib/md',
			'@stores': './src/lib/stores',
			'@utils': './src/lib/utils'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		},
    prerender: {
      crawl: true,
      entries: [
        '/',  // Home page
        '/skills',
        '/skills/ba',
        '/skills/eng',
        '/skills/ger',
        '/skills/ru',
        '/skills/ua',
        '/skills/voiceover',
        '/skills/veg',
        '/skills/flstudio',
        '/skills/audacity',
        '/skills/cpp',
        '/skills/python',
        '/skills/css',
        '/skills/html',
        '/skills/diy',
        '/projects',
        '/projects/slick-portfolio-angular',  
        '/projects/slick-portfolio-svelte',  
        '/projects/arduino-based-volume-mixer',
        '/projects/arduino-based-video-player',
        '/projects/lora-based-wan-node',
        '/projects/diy-macro-pad',
        '/projects/savings-calcuator',
        '/projects/legacy-page',
        '/projects/cms-website',
        '/projects/legacy-school-project',
        '/experience',
        '/experience/soft-dev',
        '/experience/diy-electronics',
        '/experience/voice-over-artist',
        '/education',
        '/education/high-school',
        '/resume',
        '/search'
      ]
    }
	}
};

export default config;
