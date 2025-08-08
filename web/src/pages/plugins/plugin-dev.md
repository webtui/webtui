---
layout: '@/layouts/Doc.astro'
title: Developing Plugins
order: -1
---

The requirements for developing a plugin are very simple:

1. Must export one or more CSS stylesheets
2. Must be available on the NPM registry
3. All utility and/or component variant attributes must be suffixed with `-`
4. Uses the correct CSS `@layer`(s)

### Style Layers

- The `base` layer is reserved for base styles such as colors, fonts, and other variables
- The `utils` layer is reserved for utility attributes
- The `components` layer is reserved for styling elements and components

To define styles for a specific layer, use the CSS `@layer` at-rule [[MDN Reference]](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

```css
@layer base {
    /* ... */
}
@layer utils {
    /* ... */
}
@layer components {
    /* ... */
}
```
