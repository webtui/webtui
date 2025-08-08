---
layout: '@/layouts/Doc.astro'
title: TUIs vs GUIs
order: 2
---

**Terminal UIs** (TUIs) use **ASCII/Unicode characters** to represent UI elements

**Graphical UIs** (GUIs) instead use **graphical elements** like windows, buttons, inputs, etc

To build **Terminal-like UIs**, you will need to

- Use a [Monospace Font](#monospace-fonts)
- Start thinking in [Character Cells](#character-cells) for spacing, sizing, and positioning

## Monospace Fonts

In most traditional fonts, some characters (like `i`) are narrower than others (like `w`)

All characters in **Monospace Fonts** occupy the same width

This makes it easier to align characters

It also makes it easier to create ASCII art

```
         _nnnn_
        dGGGGMMb
       @p~qp~~qMb
       M|@||@) M|
       @,----.JM|
      JS^\__/  qKL
     dZP        qKRb
    dZP          qKKb
   fZP            SMMb
   HZM            MMMM
   FqM            MMMM
 __| ".        |\dS"qML
 |    `.       | `' \Zq
_)      \.___.,|     .'
\____   )MMMMMP|   .'
     `-'       `--' hjm
```

## Character Cells

Stop thinking in standard CSS units like `px, em, rem, %`

Start thinking in **Character Cells** for spacing, sizing, and positioning

CSS comes with two units that represent the width and height of a single **character cell**:

- `ch` is equal to the **ch**aracter width of the `0` glyph in the current font [[MDN Reference]](https://developer.mozilla.org/en-US/docs/Web/CSS/length#ch)
- `lh` is equal to the **l**ine **h**eight of the element on which it is used [[MDN Reference]](https://developer.mozilla.org/en-US/docs/Web/CSS/length#lh)

Remember that when using a **Monospace font**, _every character has the **same width**_, so `ch` applies for **all characters**

If I were to create a box that is 10 characters wide and 5 lines tall, I would use the following CSS:

```css
.box {
    width: 10ch;
    height: 5lh;
}
```

---

Now that you understand the differences between building TUIs and GUIs, let's dive in
