import type { Element, Root } from 'hast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

// Adds tabindex="0" to most markdown block elements for vim-like navigation

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

const rehypeMarkdownTabIndex: Plugin<[], Root> = () => {
    return (tree) => {
        visit(tree, 'element', (node: Element) => {
            if (indexableElements.includes(node.tagName)) {
                node.properties.tabIndex = 0
            }
        })
    }
}

export default rehypeMarkdownTabIndex
