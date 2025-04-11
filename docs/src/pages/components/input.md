---
layout: "@/layouts/Doc.astro"
title: Input
---

## Import

```css
@import "@webtui/css/components/input.css";
```

## Usage

```html
<input />
```

### `box-`

`<input>` **does not** support pseudo-elements like `::before` and `::after`

Therefore you **cannot** use the `box-` utility directly on an `<input>` element

Wrap an `<input>` with a `<div box-="*">` to apply a box border

```html
<div box-="round">
    <input />
</div>
```

Passing the `contenteditable` attribute to a `<div>` element is an alternative option

```html
<div contenteditable box-="round"></div>
```

### `size-`

Use the `size-` attribute to change the size of an input

```html
<!-- Default -->
<input />
<!-- Small, no padding -->
<input size-="small" />
<!-- Large, padded -->
<input size-="large" />
```

### Extending

To extend the Input stylesheet, define a CSS rule on the `components` layer

```css
@layer components {
    input
        :not([type="button"])
        :not([type="submit"])
        :not([type="reset"])
        :not([type="checkbox"])
        :not([type="radio"]),
    [is-~="input"] {
        &[size-="thicc"] {
            height: 3lh;
            padding: 1lh 8ch;
        }

        /* ... */
    }
}

## Scope

- All elements with the `is-~="input"` selector
- All `<input>` elements that are not of type `button`, `submit`, `reset`, `checkbox`, or `radio`

```css
input
    :not([type="button"])
    :not([type="submit"])
    :not([type="reset"])
    :not([type="checkbox"])
    :not([type="radio"]),
[is-~="input"] { /* ... */ }
```
