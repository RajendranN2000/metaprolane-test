import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import dotenv from 'dotenv';
import robotsTxt from 'astro-robots-txt';
// import compress from 'astro-compress';

dotenv.config();

// https://astro.build/config
export default defineConfig({
    build: {
        mode: "production"
    },
    site: "https://www.metaprolane.com/",
    integrations: [react(), sitemap(), robotsTxt(),(await import("astro-compress")).default({
        Image: false,
        SVG: false,
    })],
});