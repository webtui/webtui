---
layout: "@/layouts/Doc.astro"
title: Typography
order: 1
---

The **Typography** stylesheet provides styles for headings and inline elements

## Installation

```css
@import "@webtui/css/components/typography.css";
```

## Usage

### Headings

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Paragraphs

```html
<p>Lorem Ipsum Dolor Sit Amet</p>
```

### Blockquotes

```html
<blockquote>Lorem Ipsum Dolor Sit Amet</blockquote>
```

### Lists

```html
<ul>
    <li>Supports <strong>styled inline elements</strong></li>
    <li>Like a <code>charm</code></li>
</ul>
```

### Inline Elements

```html
<p>
    Normal
    <strong>Strong</strong>
    <code>Inline Code</code>
    <a href="https://example.com">Link</a>
</p>
```

### `is-="typography-block"`

```html
<div is-="typography-block">
    Typography <strong>block</strong>
</div>
```

## Scope

- All HTML heading elements
- paragraphs, blockquotes, list items, elements with `is-="typography-block"` and their respective inline elements

```css
@layer components {
    h1, h2, h3, h4, h5 {/* ... */}

    p,
    blockquote,
    li,
    [is-="typography-block"] {
        /* ... */

        strong {/* ... */}
        a {/* ... */}
        code {/* ... */}
    }
}
```
