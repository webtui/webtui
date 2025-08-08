---
layout: '@/layouts/Doc.astro'
title: Vite
order: 2
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

Import additional utilities, components, and themes in `globals.css`

```css
@layer base, utils, components;

@import '@webtui/css/base.css';

/* Utils */
@import '@webtui/css/utils/box.css';

/* Components */
@import '@webtui/css/components/button.css';
@import '@webtui/css/components/typography.css';
```

ESM imports can be used to scope styles to specific files

```tsx
import '@webtui/css/components/button.css'
```
