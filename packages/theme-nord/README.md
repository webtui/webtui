# @webtui/theme-nord

A port of the [Nord](https://nordtheme.com) color palette to [WebTUI](https://github.com/webtui/webtui)

Provides additional variants for the listed components in the base WebTUI library

## Installation

Ensure you import the theme **after** all the other stylesheets from `@webtui/css`

```css
@layer base, utils, components;

@import '@webtui/css/base.css';
@import '@webtui/css/components/typography.css';
/* ... */

@import '@webtui/theme-nord';
```

Set the `data-webtui-theme` attribute to the `<html>` tag

```html
<html data-webtui-theme="nord">
```

To only apply the theme to a specific element, use the same attribute

```html
<html data-webtui-theme="dark">
    <body>
        <div data-webtui-theme="nord">
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

### Typography

- Colors headings from `h1` to `h6`
- inline `<a>` tags are underlined and colored to be `var(--nord7)`
- inline `<code>` tags are colored to be `var(--nord12)`

```html
<h1>Heading 1</h1>
<!-- ... -->
<h6>Heading 6</h6>

<p><a href="https://example.com">Link</a> <code>Inline Code</code></p>
```

### Badge

Adds additional variants to badges matching all custom accent colors

```html
<span is-="badge" variant-="nord0">nord0</span>
<span is-="badge" variant-="nord1">nord1</span>
<!-- ... -->
<span is-="badge" variant-="nord14">nord14</span>
<span is-="badge" variant-="nord15">nord15</span>
```

### Button

Adds additional variants to buttons matching all custom accent colors

```html
<button variant-="nord0">nord0</button>
<button variant-="nord1">nord1</button>
<!-- ... -->
<button variant-="nord14">nord14</button>
<button variant-="nord15">nord15</button>
```

## CSS Variables

Adds the following CSS variables to the `base` layer

```css
:root {
    /* Polar Night */
    --nord0: #2e3440;
    --nord1: #3b4252;
    --nord2: #434c5e;
    --nord3: #4c566a;

    /* Snow Storm */
    --nord4: #d8dee9;
    --nord5: #e5e9f0;
    --nord6: #eceff4;

    /* Frost */
    --nord7: #8fbcbb;
    --nord8: #88c0d0;
    --nord9: #81a1c1;
    --nord10: #5e81ac;

    /* Aurora */
    --nord11: #bf616a;
    --nord12: #d08770;
    --nord13: #ebcb8b;
    --nord14: #a3be8c;
    --nord15: #b48ead;
}
```

The base background/foreground colors use the following CSS variables from the Nord palette

```css
:root {
    --background0: var(--nord0);
    --background1: var(--nord1);
    --background2: var(--nord2);
    --background3: var(--nord3);

    --foreground0: var(--nord6);
    --foreground1: var(--nord5);
    --foreground2: var(--nord4);
}
```

