---
layout: "@/layouts/Doc.astro"
title: Input
---

The **Input** stylesheet provides styles for **inputs**

## Installation

```css
@import "@webtui/css/components/input.css";
```

## Usage

```html
<input />
```

### With `box-`

The `<input>` HTML element **does not** support pseudo-elements like `::before` and `::after` 

You **cannot** use the `box-` utility directly on an `<input>` element

You can use a `<div>` element to wrap the `<input>`

```html
<div box-="round">
    <input />
</div>
```

Or you can use a `contenteditable` div

```html
<div contenteditable box-="round"></div>
```

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
