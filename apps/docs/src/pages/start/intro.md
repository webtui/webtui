---
layout: "@/layouts/Doc.astro"
title: Introduction
order: 0
---

**WebTUI** is a **CSS library** for building **Terminal-like UIs in the browser**

To get started, you must first part with some practices you were taught in web development and embrace the following principles:

1. Use a **Monospace Font** in which every character has the same width
2. Use a consistent font size for everything, **including headers**
3. Stop thinking of spacing and sizing in standard CSS units like `px, em, rem, %` and start thinking in **character cells**

## Units

Let me introduce you to two new CSS units that you will use frequently when building with WebTUI

- `ch` is equal to the **ch**aracter width of `0` glyph in the current font [[docs ↗]](https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch)
- `lh` is equal to the **l**ine **h**eight of the element on which it is used [[docs ↗]](https://developer.mozilla.org/en-US/docs/Web/CSS/length#lh)

Rember that when using a **Monospace font**, _every character has the **same width**_, so `ch` applies for **all characters**

If I were to create a box that is 10 characters wide and 5 lines tall, I would use the following CSS:

```css
.box {
  width: 10ch;
  height: 5lh;
}
```

---

Now that you know what rules to break, move on to the [next step](/start/installation) to install and start building with WebTUI
