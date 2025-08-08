---
layout: '@/layouts/Doc.astro'
title: Astro
order: 3
---

Install the base WebTUI package with your preferred package manager

```bash
bun i @webtui/css
npm i @webtui/css
yarn add @webtui/css
pnpm install @webtui/css
```

Define the order of layers and import the base stylesheet in your global CSS file

```css
@layer base, utils, components;

@import '@webtui/css/base.css';
```

Import additional utilities, components, and themes the CSS file

```css
@layer base, utils, components;

@import '@webtui/css/base.css';

/* Utils */
@import '@webtui/css/utils/box.css';

/* Components */
@import '@webtui/css/components/button.css';
@import '@webtui/css/components/typography.css';
```

Import the global CSS file in your root layout file in the frontmatter section

```astro
---
import '../styles/global.css'
---
```

## Scoping

Astro scopes styles to specific islands instead of globally

### Frontmatter Imports

Import the desired file in the frontmatter section of your component

```astro
---
import '@webtui/css/components/button.css'
---
```

### `<style>` tag

Astro scopes CSS in `<style>` tags to specific components instead of globally [[docs](https://docs.astro.build/en/guides/styling/#scoped-styles)]

Add the `is:global` modifier to the `<style>` tag if you intend to import a CSS file from WebTUI

```html
<style is:global>
    @import '@webtui/css/components/button.css';
</style>
```

### Full Library Import

Modify `astro.config.mjs` and enable `noExternal` for `@webtui/css` if you intend to import the [Full Library](/start/installation#full-library-import) [[docs](https://docs.astro.build/en/guides/styling/#import-a-stylesheet-from-an-npm-package)]

```js
import { defineConfig } from 'astro/config'

export default defineConfig({
    vite: {
        ssr: {
            noExternal: ['package-name'],
        },
    },
})
```
