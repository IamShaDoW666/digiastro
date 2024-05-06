import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'

export default defineConfig({
  site: 'https://dubai-hikvision.com',
  integrations: [tailwind(), react(), sitemap(),
    partytown({
			config: {
        textCompression: 'gzip',
			  forward: ["dataLayer.push"],
			},
		}),
  ]
});