import vercel from '@astrojs/adapter-vercel'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://astronaut-xi.vercel.app',
	integrations: [mdx(), sitemap()],
	adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
