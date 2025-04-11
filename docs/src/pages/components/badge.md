---
layout: "@/layouts/Doc.astro"
title: Badge
---

## Import

```css
@import "@webtui/css/components/badge.css";
```

## Usage

Simply add the `is-="badge"` attribute to any HTML element

```html
<span is-="badge">badge</span>
```

### `variant-`

Use the `variant-` attribute to change the color of a badge

```html
<span is-="badge" variant-="foreground1">foreground1</span>
<span is-="badge" variant-="background2">background2</span>
```

Available variants match the [base theme colors](/start/theming#colors)

```html
<span is-="badge" variant-="background0"></span>
<span is-="badge" variant-="background1"></span>
<span is-="badge" variant-="background2"></span>
<span is-="badge" variant-="background3"></span>
<span is-="badge" variant-="foreground0"></span>
<span is-="badge" variant-="foreground1"></span>
<span is-="badge" variant-="foreground2"></span>
```

### Styling

Badges are styled using the custom `--badge-color` and `--badge-text` CSS properties

```css
#my-custom-badge {
  --badge-color: #ffffff;
  --badge-text: #000000;
}
```

### Extending

To extend the Badge stylesheet, define a CSS rule on the `components` layer

```css
@layer components {
    [is-~="badge"] {
        &[variant-="red"] {
            --badge-color: red;
            --badge-text: white;
        }

        /* ... */
    }
}
```

## Scope

- All elements with the `is-~="badge"` selector

```css
[is-~="badge"] { /* ... */ }
```
