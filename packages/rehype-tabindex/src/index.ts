import type { Element, Root } from 'hast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

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
];

const rehypeMarkdownTabIndex: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (indexableElements.includes(node.tagName)) {
        node.properties.tabIndex = 0;
      }

      const imageChild = node.children.find(
        (child) => child.type === 'element' && child.tagName === 'img',
      );

      if (node.tagName === 'p' && imageChild) {
        const figcaption: Element = {
          type: 'element',
          tagName: 'figcaption',
          properties: {},
          children: [
            {
              type: 'text',
              value: `\uf03e ${
                ((imageChild as Element).properties.alt as
                  | string
                  | undefined) ?? 'Image'
              }`,
            },
          ],
        };

        const figcaptionContainer: Element = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: ['image-caption'],
          },
          children: [figcaption],
        };

        const wrapper: Element = {
          type: 'element',
          tagName: 'div',
          properties: {
            'box-': 'square',
            'shear-': 'top',
            tabIndex: 0,
          },
          children: [figcaptionContainer, node],
        };

        parent.children[index] = wrapper;
      } else if (node.tagName === 'p') {
        node.properties.tabIndex = 0;
      }
    });
  };
};

export default rehypeMarkdownTabIndex;
