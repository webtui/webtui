# @webtui/css

Modular CSS Library that brings the beauty of Terminal UIs to the browser

Read the docs at https://webtui.ironclad.sh

## Installation

Install the base WebTUI package with your preferred package manager

```bash
bun i @webtui/css
npm i @webtui/css
yarn add @webtui/css
pnpm install @webtui/css
```

In your global CSS file, define the order of layers using the `@layer` at-rule [[MDN Reference]](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) **before** importing the base stylesheet

```css
@layer base, utils, components;

@import "@webtui/css/base.css";
```

Import the desired utilities, components, and themes **after** importing the base stylesheet

```css
@layer base, utils, components;

@import "@webtui/css/base.css";

/* Utils */
@import "@webtui/css/utils/box.css";

/* Components */
@import "@webtui/css/components/button.css";
@import "@webtui/css/components/typography.css";
```
