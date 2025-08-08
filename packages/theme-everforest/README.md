# @webtui/theme-everforest

A port of the [Everforest](https://github.com/sainnhe/everforest) color palette to [WebTUI](https://github.com/webtui/webtui).

Provides additional variants for the listed components in the base WebTUI library and supports both dark (default) and light themes with multiple contrast levels.

## Installation

Install the theme with your preferred package manager

```bash
bun i @webtui/theme-everforest
npm i @webtui/theme-everforest
yarn add @webtui/theme-everforest
pnpm i @webtui/theme-everforest
```

Ensure you import the theme **after** all the other stylesheets from `@webtui/css` or the styles will not be applied.

```css
@layer base, utils, components;

@import '@webtui/css/base.css';
@import '@webtui/css/components/typography.css';
/* ... */

@import '@webtui/theme-everforest';
```

Set the `data-webtui-theme` attribute on the `<html>` tag or a container element.

```html
<html data-webtui-theme="everforest-dark-medium"></html>
```

To only apply the theme to a specific element:

```html
<html data-webtui-theme="dark">
    <!-- Example base theme -->
    <body>
        <div data-webtui-theme="everforest-light-hard">
            <!-- everforest light-hard styles applied here -->
        </div>
        <div data-webtui-theme="everforest-dark-soft">
            <!-- Gruvbox dark-soft styles applied here -->
        </div>
    </body>
</html>
```

## Variants

Supports dark and light modes, each with hard, medium, and soft contrast levels.

- `everforest`, `everforest-dark`, and `everforest-dark-medium` are the same
- `everforest-light` and `everforest-light-medium` are the same

```html
<html data-webtui-theme="everforest"></html>
<html data-webtui-theme="everforest-dark"></html>
<html data-webtui-theme="everforest-dark-medium"></html>
<html data-webtui-theme="everforest-dark-hard"></html>
<html data-webtui-theme="everforest-dark-soft"></html>

<html data-webtui-theme="everforest-light"></html>
<html data-webtui-theme="everforest-light-medium"></html>
<html data-webtui-theme="everforest-light-hard"></html>
<html data-webtui-theme="everforest-light-soft"></html>
```

## Components

Components affected/modified by the theme:

- [Typography](#typography)
- [Badge](#badge)
- [Button](#button)

### Typography

- Colors headings from `h1` to `h6` using `var(--ef-green)`.
- Inline `<a>` tags are underlined and colored `var(--ef-blue)`, changing to `var(--ef-aqua)` on hover.
- Inline `<code>` tags are colored `var(--ef-orange)`.

```html
<h1>Heading 1</h1>
<!-- ... -->
<h6>Heading 6</h6>

<p><a href="https://example.com">Link</a> <code>Inline Code</code></p>
```

### Badge

Adds additional variants to badges matching Everforest accent colors.

```html
<span is-="badge" variant-="red">red</span>
<!-- ... -->
<span is-="badge" variant-="aqua">aqua</span>
<span is-="badge" variant-="orange">orange</span>
```

### Button

Adds additional variants to buttons matching Everforest accent colors.

```html
<button variant-="red">red</button>
<!-- ... -->
<button variant-="aqua">aqua</button>
<button variant-="orange">orange</button>
```

## CSS Variables

Adds the following CSS variables within the `base` layer, each of which change based on the theme variant

```css
[data-webtui-theme='everforest-*-*'] {
    --red: #e67e80;
    --orange: #e69875;
    --yellow: #dbbc7f;
    --green: #a7c080;
    --blue: #7fbbb3;
    --aqua: #83c092;
    --purple: #d699b6;
    --fg: #d3c6aa;
    --statusline1: #a7c080;
    --statusline2: #d3c6aa;
    --statusline3: #e67e80;
    --gray0: #7a8478;
    --gray1: #859289;
    --gray2: #9da9a0;

    --bg-dim: #232a2e;
    --bg0: #2d353b;
    --bg1: #343f44;
    --bg2: #3d484d;
    --bg3: #475258;
    --bg4: #4f585e;
    --bg5: #56635f;
    --bg-red: #4c3743;
    --bg-visual: #493b40;
    --bg-yellow: #45443c;
    --bg-green: #3c4841;
    --bg-blue: #384b55;
}
```

The base background/foreground colors use the following CSS variables from the Everforest palette

```css
[data-webtui-theme='everforest-*-*'] {
    --background0: var(--bg0);
    --background1: var(--bg1);
    --background2: var(--bg2);
    --background3: var(--bg3);

    --foreground0: var(--fg);
    --foreground1: var(--gray2);
    --foreground2: var(--gray1);
}
```
