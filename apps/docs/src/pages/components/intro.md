---
layout: "@/layouts/Doc.astro"
title: Intro to Components
order: 0
---

**WebTUI** is **not** a **Component Library**

It provides **component stylesheets** that can be used to style various HTML elements

You will have to take care of accessibility and javascript on your own

## Using Component Stylesheets

Some component stylesheets style certain HTML elements

```html
<style>
  @import "@webtui/css/components/button.css";
</style>

<button>button</button>
```

Each component stylesheet introduces an `is-="*"` attribute that can be used to apply its style to other elements

```html
<div is-="button">div with button style</div>
```

Some components introduce variant attributes like `size-` that are suffexed with `-`

```html
<button size-="small">small button</button>
```

Usage and variants are documented on the respective page of every component
