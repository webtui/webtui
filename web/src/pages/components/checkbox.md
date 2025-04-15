---
layout: "@/layouts/Doc.astro"
title: Checkbox
---

## Import

```css
@import "@webtui/css/components/checkbox.css";
```

## Usage

Add a native `<input type="checkbox">` to your markup. The TUI style will be applied automatically.

<div style="display: flex; flex-direction: column; gap: 0.5em; margin-bottom: 1em;">
  <label> <input type="checkbox"> Unchecked </label>
  <label> <input type="checkbox" checked> Checked </label>
  <label> <input type="checkbox" disabled> Disabled </label>
  <label> <input type="checkbox" checked disabled> Checked Disabled </label>
</div>

```html
<label> <input type="checkbox" /> Unchecked </label>
<label> <input type="checkbox" checked /> Checked </label>
<label> <input type="checkbox" disabled /> Disabled </label>
<label> <input type="checkbox" checked disabled /> Checked Disabled </label>
```

## Block Style

Add the `block` class to create a boxed checkbox with its label:

<div style="display: flex; flex-direction: column; gap: 0.5em; margin-bottom: 1em;">
  <label> <input type="checkbox" class="block" /> Block style </label>
  <label> <input type="checkbox" class="block" checked /> Checked block </label>
  <label> <input type="checkbox" class="block" disabled /> Disabled block </label>
</div>

```html
<label> <input type="checkbox" class="block" /> Block style </label>
<label> <input type="checkbox" class="block" checked /> Checked block </label>
<label> <input type="checkbox" class="block" disabled /> Disabled block </label>
```

## Focus

Tab to a checkbox to see the label become bold and underlined.

## Scope

- All native `<input type="checkbox">` elements

```css
input[type="checkbox"] {
  /* ... */
}
```
