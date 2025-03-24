---
layout: "@/layouts/Doc.astro"
title: Installation
order: 1
---

To install WebTUI, simply install it via your preferred package manager

```bash
npm install @webtui/css
```

Then import it in your project via ESM

```js
import "@webtui/css";
```

Or CSS

```css
@import "@webtui/css";
```

## CDN

Alternatively, you can use import WebTUI via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@webtui/css/dist/full.css" />
```

It's safer to specify a specific version when using the CDN

```html
https://cdn.jsdelivr.net/npm/@webtui/css@0.0.1/dist/full.css
https://cdn.jsdelivr.net/npm/@webtui/css@0.0.2/dist/full.css
https://cdn.jsdelivr.net/npm/@webtui/css@latest/dist/full.css
https://cdn.jsdelivr.net/npm/@webtui/css/dist/full.css
```

## Modularity

WebTUI is designed to be a modular CSS library, allowing you to import only the styles you need.

After specifying the stylesheet layers [[docs]](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) and importing the base styles,

```css
@layer base, utils, components;

@import "@webtui/css/base.css";
```

You can then import the desired utilities and components

```css
@import "@webtui/css/utils/box.css";
@import "@webtui/css/components/button.css";
@import "@webtui/css/components/input.css";
```

CSS/ESM imports are preferred over importing files via the CDN for specific modularity, but both methods are supported

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@webtui/css/dist/base.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@webtui/css/dist/components/button.css" />

<style>
  @layer base, utils, components;
</style>
```

In order for the styles to be applied in the correct order of precedence, you **must specify the layer order** with the CSS [`@layer` at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
