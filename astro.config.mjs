import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  site: 'https://astronaut-xi.vercel.app',
  integrations: [mdx(), sitemap()],
  output: 'server',
	adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});