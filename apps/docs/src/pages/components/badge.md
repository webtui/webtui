---
layout: "@/layouts/Doc.astro"
title: Badge
---

<style>
    .b { color: var(--background0); }
    .red { --badge-background-color: var(--red); }
    .orange { --badge-background-color: var(--peach); }
    .yellow { --badge-background-color: var(--yellow); }
    .green { --badge-background-color: var(--green); }
    .blue { --badge-background-color: var(--blue); }
    .mauve { --badge-background-color: var(--mauve); }
    .fg { --badge-background-color: var(--foreground0); }
</style>

The **Badge** stylesheet provides styles for **statusline**-like badges

<div flex-="row gap:1 wrap">
    <span is-="badge" class="b red">badge</span>
    <span is-="badge" class="b orange" cap-="round">round</span>
    <span is-="badge" class="b yellow" cap-="triangle">triangle</span>
    <span is-="badge" class="b green" cap-="ribbon">ribbon</span>
    <span is-="badge" class="b blue" cap-="slant-top">slant-top</span>
    <span is-="badge" class="b green" cap-="slant-bottom">slant-bottom</span>
    <span is-="badge" class="b yellow" cap-="slant-bottom slant-top">slant-bottom + slant-top</span>
    <span is-="badge" class="b orange" cap-="ribbon round">ribbon + round</span>
    <span is-="badge" class="b mauve" cap-="square triangle">square + triangle</span>
</div>

By default, badges use **square** caps. For the others, you will need to [use a Nerd Font](/guides/fonts).

## Installation

```css
@import "@webtui/css/components/badge.css";
```

## Usage

Simply add the `is-="badge"` attribute to any element

```html
<span is-="badge">badge</span>
```

### Styling

Instead of directly setting the `background` or `background-color` property via CSS, you will need to use the custom `--badge-background-color` CSS property.

```html
<style>
    #red-badge {
        --badge-background-color: red;
        color: black;
    }
</style>

<span is-="badge" id="red-badge">red</span>
```

### End Caps

If you have a Nerd Font installed, you can use the `cap-` attribute to customize end caps on badges

```html
<link href="[url to nerd font]" rel="stylesheet" />

<span is-="badge" cap-="round">round</span>
<span is-="badge" cap-="triangle">triangle</span>
```

You can also define a start and end cap by adding a second value to the `cap-` attribute

```html
<span is-="badge" cap-="ribbon round">ribbon + round</span>
```

#### Cap Values

- `cap-="square"` - <span is-="badge" cap-="square" class="b fg">square</span>
- `cap-="round"` - <span is-="badge" cap-="round" class="b fg">round</span>
- `cap-="triangle"` - <span is-="badge" cap-="triangle" class="b fg">triangle</span>
- `cap-="ribbon"` - <span is-="badge" cap-="ribbon" class="b fg">ribbon</span>
- `cap-="slant-top"` - <span is-="badge" cap-="slant-top" class="b fg">slant-top</span>
- `cap-="slant-bottom"` - <span is-="badge" cap-="slant-bottom" class="b fg">slant-bottom</span>

## Scope

```css
[is-~="badge"] { /* ... */ }
```
