---
layout: '@/layouts/Doc.astro'
title: Style Guide
---

The style guide for code contributed to WebTUI

## CSS Units

- All CSS units should be based on `ch` [[Docs]]() or `lh` [[Docs]]()
- Avoid `em`, `px`, `rem`, `%`, or other units not related to character width or line height

## Selectors

All selectors in components, utilities, and plugins should be nested within a CSS `@layer` block

- Only the `components` or `utils` layer should be used
- Do not use classes or IDs for styling
- Suffix each custom attribute selector with a dash (e.g. `variant-`, `color-`, `is-`)
- Use the `[is-~="<component-name>"]` selector for custom components (notice the `~` before the `=`)

```css
@layer components {
    input[type='file'],
    [is-=~'fileinput'] {
        /* ... */
    }
}

@layer utils {
    [is-~='tooltip'] {
        /* ... */
    }
}
```

## Documentation

If your Pull Request modifies or adds a new component or utility, please ensure that you add or update the corresponding documentation page
