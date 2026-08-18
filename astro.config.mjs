// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// The Complementarity-First hub was merged into the homepage; its former
	// URLs (and the standalone provenance-tree page) redirect there.
	redirects: {
		'/complementarity-first': '/',
		'/complementarity-first/tree': '/',
		'/zh-cn/complementarity-first': '/zh-cn/',
		'/zh-cn/complementarity-first/tree': '/zh-cn/',
		'/zh-tw/complementarity-first': '/zh-tw/',
		'/zh-tw/complementarity-first/tree': '/zh-tw/',
	},
	site: 'https://qczhang.com',
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh-cn', 'zh-tw'],
		routing: {
			prefixDefaultLocale: false,
			redirectToDefaultLocale: false,
		},
	},
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
