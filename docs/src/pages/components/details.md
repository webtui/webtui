---
layout: "@/layouts/Doc.astro"
title: Details
---

The **Details** stylesheet removes some default browser styling from the `<details>` and `<summary>` tags

## Installation

```css
@import "@webtui/css/components/details.css";
```

## Usage

```html
<details>
    <summary>Summary</summary>
    <p>Contents</p>
</details>
```

## Scope

- All `<details>` elements
- All `<summary>` elements

```css
details summary { /* ... */ }
```
