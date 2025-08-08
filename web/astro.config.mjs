// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeTabIndex from '@webtui/rehype-tabindex'

// https://astro.build/config
export default defineConfig({
    compressHTML: false,
    redirects: {
        '/docs': '/start/intro',
        '/start': '/start/intro',
        '/examples': '/showcase',
    },
    markdown: {
        rehypePlugins: [rehypeHeadingIds, rehypeTabIndex],
        shikiConfig: {
            theme: 'catppuccin-mocha',
            wrap: true,
        },
    },
    integrations: [mdx({ extendMarkdownConfig: true })],
    vite: {
        ssr: {
            noExternal: [
                '@webtui/css',
                '@webtui/theme-catppuccin',
                '@webtui/theme-nord',
                '@webtui/theme-gruvbox',
                '@webtui/theme-vitesse',
                '@webtui/plugin-nf',
            ],
        },
    },
})
