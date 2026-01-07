import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import { visit } from 'unist-util-visit'

const indexableElements = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'pre',
    'li',
    'p',
]

const rehypeMarkdownTabIndex = () => {
    // @ts-expect-error doesn't matter
    return (tree) => {
        visit(tree, 'element', (node) => {
            if (indexableElements.includes(node.tagName)) {
                node.properties.tabIndex = 0
            }
        })
    }
}

// https://astro.build/config
export default defineConfig({
    compressHTML: false,
    markdown: {
        rehypePlugins: [rehypeHeadingIds, rehypeMarkdownTabIndex],
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
