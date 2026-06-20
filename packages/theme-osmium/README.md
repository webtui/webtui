# @webtui/theme-osmium

A port of the [Osmium](https://github.com/IroncladDev/osmium) color palette to WebTUI

## Installation

Install the theme with your preferred package manager

```bash
bun i @webtui/theme-osmium
npm i @webtui/theme-osmium
yarn add @webtui/theme-osmium
pnpm i @webtui/theme-osmium
```

Ensure you import the theme **after** all the other stylesheets from `@webtui/css` or the styles will not be applied

```css
@layer base, utils, components;

@import '@webtui/css/base.css';
@import '@webtui/css/components/typography.css';
/* ... */

@import '@webtui/theme-osmium';
```

Set the `data-webtui-theme` attribute to the `<html>` tag

```html
<html data-webtui-theme="osmium-mocha"></html>
```

To only apply the theme to a specific element, use the same attribute

```html
<html data-webtui-theme="dark">
    <body>
        <div data-webtui-theme="osmium">
            <!-- ... -->
        </div>
    </body>
</html>
```

## Components

Components affected/modified by the theme

- [Typography](#typography)
- [Badge](#badge)
- [Button](#button)
- [Mark](#mark)

### Typography

- Colors headings from `h1` to `h6`
- inline `<a>` tags are underlined and colored to be `var(--blue-fg)`
- inline `<code>` tags are colored to be `var(--orange-fg)` and changes the background to `var(--orange-bg)`

```html
<h1>Heading 1</h1>
<!-- ... -->
<h6>Heading 6</h6>

<p><a href="https://example.com">Link</a> <code>Inline Code</code></p>
```

### Badge

Adds additional variants to badges matching all custom accent colors

```html
<span is-="badge" variant-="blue-fg">blue-fg</span>
<span is-="badge" variant-="green-bg">green-bg</span>
<!-- ... -->
<span is-="badge" variant-="red-fg">red-fg</span>
<span is-="badge" variant-="yellow-bg">yellow-bg</span>
```

### Button

Adds additional variants to buttons matching all custom accent colors

```html
<button variant-="blue-fg">blue-fg</button>
<button variant-="green-bg">green-bg</button>
<!-- ... -->
<button variant-="red-fg">red-fg</button>
<button variant-="yellow-bg">yellow-bg</button>
```

## Mark

Adds additional `fg-` and `bg-` variants to the mark component matching the accent colors.

```html
<mark fg-="blue-fg">blue-fg</mark>
<mark fg-="green-bg" bg-="blue-fg">green-bg + blue-fg</mark>
<!-- ... -->
<mark bg-="red-bg">red-bg</mark>
<mark fg-="yellow-fg">yellow-fg</mark>
```

## CSS Variables

Adds the following CSS variables to the `base` layer

`-fg` indicates a foreground color and `-bg` indicates a background color. Each color has a foreground, dimmed foreground, background, and bright background shade.

```css
[data-webtui-theme='osmium'] {
    /* Accent Colors */
    --blue-bg: #303849;
    --blue-bg-bright: #40495f;
    --blue-fg-dim: #8caad1;
    --blue-fg: #9abfe8;
    --purple-bg: #35334a;
    --purple-bg-bright: #464260;
    --purple-fg-dim: #9d97d3;
    --purple-fg: #b0a8eb;
    --pink-bg: #3e3149;
    --pink-bg-bright: #51405f;
    --pink-fg-dim: #c091d0;
    --pink-fg: #d9a1e8;
    --orange-bg: #423531;
    --orange-bg-bright: #564541;
    --orange-fg-dim: #cf9876;
    --orange-fg: #ebb17b;
    --green-bg: #3b3f37;
    --green-bg-bright: #4d5148;
    --green-fg-dim: #b3c48d;
    --green-fg: #c9de96;
    --red-bg: #402030;
    --red-bg-bright: #552b3f;
    --red-fg-dim: #ca5072;
    --red-fg: #e55376;
    --yellow-bg: #423c38;
    --yellow-bg-bright: #564e4a;
    --yellow-fg-dim: #cdbb91;
    --yellow-fg: #e9d39c;

    /* Surface / Foreground Colors */
    --root: #14131e;
    --surface0: #1f1d2d;
    --surface1: #242336;
    --surface2: #353553;
    --surface3: #494764;
    --surface4: #555275;
    --foreground0: #c8d5f1;
    --foreground1: #949bb9;
    --foreground2: #747a9c;
}
```

The base background/foreground colors use the following CSS variables from the Osmium palette

```css
[data-webtui-theme='osmium'] {
    --foreground0: #c8d5f1;
    --foreground1: #949bb9;
    --foreground2: #747a9c;
    --background0: var(--surface0);
    --background1: var(--surface1);
    --background2: var(--surface2);
    --background3: var(--surface3);
}
```
