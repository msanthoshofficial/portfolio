import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	
	vitePlugin: {
		inspector: true,   
	},
	
	kit: {
		paths:{
			base: dev ? '' : "/portfolio"
		},
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'dist',
            assets: 'dist',
            fallback: 'index.html',
            precompress: false,
            strict: true
        })
    }
};
export default config;