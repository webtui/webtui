---
layout: "@/layouts/Doc.astro"
title: Style Guide
---

Some guardrails for designing Terminal-like UIs

## Box Model

- You will rarely need to use borders/outlines when using WebTUI
- Use the `ch` (**ch**aracter width) CSS unit for horizontal padding/margins/gaps [[MDN Reference]](https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch)
- Use the `lh` (**l**ine **h**eight) CSS unit for vertical padding/margins/gaps [[MDN Reference]](https://developer.mozilla.org/en-US/docs/Web/CSS/length#lh)

## Colors

- Smooth gradients are not recommended for Terminal-like UIs

## Text

- All text should be using a fixed-width monospace font
- All text shold be the same size
