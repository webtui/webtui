# @webtui/theme-gruvbox

A port of the [Gruvbox](https://github.com/morhetz/gruvbox) color palette to [WebTUI](https://github.com/webtui/webtui).

Provides additional variants for the listed components in the base WebTUI library and supports both dark (default) and light themes with multiple contrast levels.

## Installation

Install the theme with your preferred package manager

```bash
bun i @webtui/theme-gruvbox
npm i @webtui/theme-gruvbox
yarn add @webtui/theme-gruvbox
pnpm i @webtui/theme-gruvbox
```

Ensure you import the theme **after** all the other stylesheets from `@webtui/css` or the styles will not be applied.

```css
@layer base, utils, components;

@import '@webtui/css/base.css';
@import '@webtui/css/components/typography.css';
/* ... */

@import '@webtui/theme-gruvbox';
```

Set the `data-webtui-theme` attribute on the `<html>` tag or a container element.

```html
<html data-webtui-theme="gruvbox-dark-medium"></html>
```

To only apply the theme to a specific element:

```html
<html data-webtui-theme="dark">
    <!-- Example base theme -->
    <body>
        <div data-webtui-theme="gruvbox-light-hard">
            <!-- Gruvbox light-hard styles applied here -->
        </div>
        <div data-webtui-theme="gruvbox-dark-soft">
            <!-- Gruvbox dark-soft styles applied here -->
        </div>
    </body>
</html>
```

## Variants

Supports dark and light modes, each with hard, medium, and soft contrast levels.

```html
<!-- Dark Variants -->
<html data-webtui-theme="gruvbox-dark-hard">
    <html data-webtui-theme="gruvbox-dark-medium">
        <!-- Default: gruvbox-dark or gruvbox -->
        <html data-webtui-theme="gruvbox-dark-soft">
            <!-- Light Variants -->
            <html data-webtui-theme="gruvbox-light-hard">
                <html data-webtui-theme="gruvbox-light-medium">
                    <!-- Default: gruvbox-light -->
                    <html data-webtui-theme="gruvbox-light-soft"></html>
                </html>
            </html>
        </html>
    </html>
</html>
```

## Components

Components affected/modified by the theme:

- [Typography](#typography)
- [Badge](#badge)
- [Button](#button)

### Typography

- Colors headings from `h1` to `h6` using `var(--gb-green)`.
- Inline `<a>` tags are underlined and colored `var(--gb-blue)`, changing to `var(--gb-aqua)` on hover.
- Inline `<code>` tags are colored `var(--gb-orange)`.

```html
<h1>Heading 1</h1>
<!-- ... -->
<h6>Heading 6</h6>

<p><a href="https://example.com">Link</a> <code>Inline Code</code></p>
```

### Badge

Adds additional variants to badges matching Gruvbox accent colors.

```html
<span is-="badge" variant-="gray">gray</span>
<span is-="badge" variant-="red">red</span>
<!-- ... -->
<span is-="badge" variant-="aqua">aqua</span>
<span is-="badge" variant-="orange">orange</span>
```

### Button

Adds additional variants to buttons matching Gruvbox accent colors.

```html
<button variant-="gray">gray</button>
<button variant-="red">red</button>
<!-- ... -->
<button variant-="aqua">aqua</button>
<button variant-="orange">orange</button>
```

## CSS Variables

Adds the following CSS variables within the `base` layer, each of which change based on the theme variant

```css
[data-webtui-theme='gruvbox-*-*'] {
    --gb-dark-bg1: #3c3836;
    --gb-dark-bg2: #504945;
    --gb-dark-bg3: #665c54;
    --gb-dark-bg4: #7c6f64;
    --gb-dark-fg0: #fbf1c7;
    --gb-dark-fg1: #ebdbb2;
    --gb-dark-fg2: #d5c4a1;
    --gb-dark-fg3: #bdae93;
    --gb-dark-fg4: #a89984;
    --gb-dark-gray: #928374;
    --gb-red: #fb4934;
    --gb-green: #b8bb26;
    --gb-yellow: #fabd2f;
    --gb-blue: #83a598;
    --gb-purple: #d3869b;
    --gb-aqua: #8ec07c;
    --gb-orange: #fe8019;

    --background1: var(--gb-dark-bg1);
    --background2: var(--gb-dark-bg2);
    --background3: var(--gb-dark-bg3);
    --foreground0: var(--gb-dark-fg1);
    --foreground1: var(--gb-dark-fg2);
    --foreground2: var(--gb-dark-fg3);
}
```

The base background/foreground colors use the following CSS variables from the Gruvbox palette

```css
[data-webtui-theme='gruvbox-*-*'] {
    --background0: var(--gb-dark-bg0);
    --background1: var(--gb-dark-bg1);
    --background2: var(--gb-dark-bg2);
    --background3: var(--gb-dark-bg3);

    --foreground0: var(--gb-dark-fg0);
    --foreground1: var(--gb-dark-fg1);
    --foreground2: var(--gb-dark-fg2);
}
```
