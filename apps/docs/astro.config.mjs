// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeTabIndex from "@webtui/rehype-tabindex";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeHeadingIds, rehypeTabIndex],
  },
  integrations: [mdx({ extendMarkdownConfig: true })],
});
