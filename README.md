# WebTUI

Modular CSS Library that brings the beauty of Terminal UIs to the browser

- Docs: https://webtui.ironclad.sh
- Examples: https://webtui.ironclad.sh/showcase
- Discord Server: https://discord.gg/yUS6T8YnfT

## Quickstart

Install the base WebTUI package with your preferred package manager

```bash
bun i @webtui/css
npm i @webtui/css
yarn add @webtui/css
pnpm install @webtui/css
```

In your global CSS file, define the order of layers then import the library

```css
@layer base, utils, components;

@import '@webtui/css';
```

Start using the library in your HTML

```html
<button>click</button>
<button size-="large">click me too</button>
<div box-="square">
    <p>content</p>
</div>
```

For more detailed installation instructions, see the [installation guide](https://webtui.ironclad.sh/start/installation) and [framework-specific installations](https://webtui.ironclad.sh/start/installation)

## Packages

All the officially-maintained packages in the monorepo

- [@webtui/css](https://npmjs.com/package/@webtui/css)
- [@webtui/plugin-nf](https://npmjs.com/package/@webtui/plugin-nf)
- [@webtui/theme-catppuccin](https://npmjs.com/package/@webtui/theme-catppuccin)
- [@webtui/theme-gruvbox](https://npmjs.com/package/@webtui/theme-gruvbox)
- [@webtui/theme-nord](https://npmjs.com/package/@webtui/theme-nord)
- [@webtui/theme-vitesse](https://npmjs.com/package/@webtui/theme-vitesse)
- [@webtui/theme-everforest](https://npmjs.com/package/@webtui/theme-everforest)

## Development

This repository is a monorepo that contains the website and all the official WebTUI packages.

1. Ensure [Bun](https://bun.sh/) is installed
2. Clone the repository
    ```bash
    git clone https://github.com/webtui/webtui
    ```
3. Install dependencies
    ```bash
    bun i
    ```
4. Build the project
    ```bash
    bun run build
    ```
4. Start the dev server
    ```bash
    bun run dev
    ```
