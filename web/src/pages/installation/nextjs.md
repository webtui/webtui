---
layout: '@/layouts/Doc.astro'
title: Next.js
order: 1
---

Install the base WebTUI package with your preferred package manager

```bash
bun i @webtui/css
npm i @webtui/css
yarn add @webtui/css
pnpm install @webtui/css
```

Define the order of layers and import the base stylesheet in `globals.css`

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

ESM imports can be used to scope styles to specific components

```tsx
import '@webtui/css/components/button.css'

type Props = {
    /* ... */
}

export default function Button(props: Props) {
    return <button>{props.children}</button>
}
```
