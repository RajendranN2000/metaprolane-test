import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import dotenv from 'dotenv';
import robotsTxt from 'astro-robots-txt';
dotenv.config();
// https://astro.build/config
export default defineConfig({
    site:"https://metaprolane-development.vercel.app/",
    integrations: [react(),sitemap(),robotsTxt()],
});