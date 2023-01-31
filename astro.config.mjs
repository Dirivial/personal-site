import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx({
    syntaxHighlighting: 'Prism',
    remarkPlugins: [remarkGfm, remarkToc, remarkMath],
    rehypePlugins: [rehypeKatex],
    gfm: true,
  },)]
});