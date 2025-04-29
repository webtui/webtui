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

```html
<label>
  <input type="checkbox" />
  Unchecked
</label>
<label>
  <input type="checkbox" checked />
  Checked
</label>
<label>
  <input type="checkbox" disabled />
  Disabled
</label>
<label>
  <input type="checkbox" checked disabled />
  Checked Disabled
</label>
```

### Extending

To extend the Checkbox stylesheet, define a CSS rule on the `components` layer

```css
@layer components {
  input[type="checkbox"] {
    /* ... */
  }
}
```

## Scope

- All native `<input type="checkbox">` elements

```css
input[type="checkbox"] {
  /* ... */
}
```
