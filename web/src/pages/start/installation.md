---
layout: '@/layouts/Doc.astro'
title: Installation
order: 3
---

This guide covers how to install WebTUI with CSS, ESM, and CDN imports

For framework-specific guides, check out the [Installation](/installation/nextjs) section

## Installation

Install the base WebTUI package with your preferred package manager

```bash
bun i @webtui/css
npm i @webtui/css
yarn add @webtui/css
pnpm install @webtui/css
```

## Using CSS

Define the order of layers in your global CSS file using the `@layer` at-rule [[MDN Reference]](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

Ensure you define the layer order **before** importing the base stylesheet

```css
@layer base, utils, components;

@import '@webtui/css/base.css';
```

Import the desired utilities, components, and themes **after** the base stylesheet

```css
@layer base, utils, components;

@import '@webtui/css/base.css';

/* Utils */
@import '@webtui/css/utils/box.css';

/* Components */
@import '@webtui/css/components/button.css';
@import '@webtui/css/components/typography.css';
```

If you aren't using a bundler, see [Using a CDN](#using-a-cdn) instead

## Using ESM

Stylesheets can be imported via ESM if your bundler supports it

```tsx
import '@webtui/css/components/button.css'

type Props = {
    /* ... */
}

export default function Button(props: Props) {
    return <button>{props.children}</button>
}
```

Ensure you have previously defined the order of layers in your global CSS file

## Using a CDN

If you aren't using a bundler, you can import the CSS files from a CDN like [JSDelivr](https://www.jsdelivr.com/)

```html
<style>
    @layer base, utils, components;

    @import 'https://cdn.jsdelivr.net/npm/@webtui/css@0.0.5/dist/base.css';

    /* Utils */
    @import 'https://cdn.jsdelivr.net/npm/@webtui/css@0.0.5/dist/utils/box.css';

    /* Components */
    @import 'https://cdn.jsdelivr.net/npm/@webtui/css@0.0.5/dist/components/button.css';
    @import 'https://cdn.jsdelivr.net/npm/@webtui/css@0.0.5/dist/components/typography.css';
</style>
```

Browse all the available CSS files on the [JSDelivr page](https://cdn.jsdelivr.net/npm/@webtui/css/dist/)

## Full Library Import

Individual css module imports are preferred in production to avoid importing unused CSS

For development, you can import the entire library

### CSS

Import the library using the direct package name **after** defining the order of layers

```html
<style>
    @import '@webtui/css';
</style>
```

If you aren't using a bundler, see [CDN](#cdn)

### ESM

Import the library using the direct package name

```js
import '@webtui/css'
```

### CDN

Import the `/dist/full.css` path instead of the base path

```html
<style>
    @import 'https://cdn.jsdelivr.net/npm/@webtui/css@0.0.5/dist/full.css';
</style>
```

Optionally, you can use a `<link>` tag

```html
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@webtui/css@0.0.5/dist/full.css" />
```
