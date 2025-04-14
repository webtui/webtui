# @webtui/theme-catppuccin

A port of the [Catppuccin](https://catppuccin.com) color palette to [WebTUI](https://github.com/webtui/webtui)

Provides additional variants for the listed components in the base WebTUI library

## Installation

Install the theme with your preferred package manager

```bash
bun i @webtui/theme-catppuccin
npm i @webtui/theme-catppuccin
yarn add @webtui/theme-catppuccin
pnpm i @webtui/theme-catppuccin
```

Ensure you import the theme **after** all the other stylesheets from `@webtui/css`

```css
@layer base, utils, components;

@import '@webtui/css/base.css';
@import '@webtui/css/components/typography.css';
/* ... */

@import '@webtui/theme-catppuccin';
```

## Components

- [Typography](#typography)
- [Badge](#badge)
- [Button](#button)

### Typography

- Colors headings from `h1` to `h6`
- inline `<a>` tags are underlined and colored to be `var(--sky)`
- inline `<code>` tags are colored to be `var(--red)`

```html
<h1>Heading 1</h1>
<!-- ... -->
<h6>Heading 6</h6>

<p><a href="https://example.com">Link</a> <code>Inline Code</code></p>
```

### Badge

Adds additional variants to badges matching all custom accent colors

```html
<span is-="badge" variant-="rosewater">rosewater</span>
<span is-="badge" variant-="flamingo">flamingo</span>
<!-- ... -->
<span is-="badge" variant-="blue">blue</span>
<span is-="badge" variant-="lavender">lavender</span>
```

### Button

Adds additional variants to buttons matching all custom accent colors

```html
<button variant-="rosewater">rosewater</button>
<button variant-="flamingo">flamingo</button>
<!-- ... -->
<button variant-="blue">blue</button>
<button variant-="lavender">lavender</button>
```

## CSS Variables

Adds the following CSS variables to the `base` layer

```css
:root {
    /* Accent Colors */
    --rosewater: #f5e0dc;
    --flamingo: #f2cdcd;
    --pink: #f5c2e7;
    --mauve: #cba6f7;
    --red: #f38ba8;
    --maroon: #eba0ac;
    --peach: #fab387;
    --yellow: #f9e2af;
    --green: #a6e3a1;
    --teal: #94e2d5;
    --sky: #89dceb;
    --sapphire: #74c7ec;
    --blue: #89b4fa;
    --lavender: #b4befe;

    /* Background / Foreground Colors */
    --text: #cdd6f4;
    --subtext1: #bac2de;
    --subtext0: #a6adc8;
    --overlay2: #9399b2;
    --overlay1: #7f849c;
    --overlay0: #6c7086;
    --surface2: #585b70;
    --surface1: #45475a;
    --surface0: #313244;
    --base: #1e1e2e;
    --mantle: #181825;
    --crust: #11111b;
}
```

The base background/foreground colors use the following CSS variables from the Catppuccin palette

```css
:root {
    --background0: var(--base);
    --background1: var(--surface0);
    --background2: var(--surface1);
    --background3: var(--surface2);

    --foreground0: var(--text);
    --foreground1: var(--subtext1);
    --foreground2: var(--overlay2);
}
```
