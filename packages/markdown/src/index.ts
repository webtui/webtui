import type { Root, Element } from "hast";
import { visit } from "unist-util-visit";
import type { Plugin } from "unified";

// Adds tabindex="0" to most markdown block elements for vim-like navigation

const indexableElements = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "blockquote",
  "pre",
  "li",
];

const rehypeMarkdownTabIndex: Plugin<void[], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node: Element) => {
      if (indexableElements.includes(node.tagName)) {
        node.properties.tabIndex = 0;
      }
    });
  };
};

export default rehypeMarkdownTabIndex;
