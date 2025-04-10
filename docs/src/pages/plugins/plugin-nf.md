---
layout: "@/layouts/Doc.astro"
title: Nerd Font Plugin
pluginType: plugin
order: 2
---

The **Nerd Font Plugin** adds additional styles and variants to the base styles that depend on a [Nerd Font](https://nerdfonts.com)

**Nerd Fonts** add additional glyphs from popular icon packs such as [Font Awesome](https://fontawesome.com), [Devicons](http://vorillaz.github.io/devicons/), [Octicons](https://github.com/github/octicons), and more

These docs use the `JetBrainsMono NFM` Nerd Font, were built with ``, ``, ``, and Astro, all in `` btw

## Installation

Install the plugin with your preferred package manager

```bash
bun i @webtui/plugin-nf
npm i @webtui/plugin-nf
yarn add @webtui/plugin-nf
pnpm i @webtui/plugin-nf
```

```css
@import "@webtui/plugin-nf";
```

## Install a Nerd Font

### Static Font

Install a Nerd Font from https://nerdfonts.com and save the ttf files to your project's `public` or `static` directory

Use the `@font-face` CSS at-rule to define the font faces

```css
@font-face {
  font-family: "JetBrainsMonoNFM";
  src: url("/path/to/fonts/JetBrainsMonoNFM-Regular.ttf") format("ttf");
  font-stretch: normal;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "JetBrainsMonoNFM";
  src: url("/path/to/fonts/JetBrainsMonoNFM-Bold.ttf") format("ttf");
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
}

/* ... font styles ... */
```

### CDN

If you prefer to use Nerd Fonts served over a CDN, choose a Nerd Font from [this repository](https://github.com/mshaugh/nerdfont-webfonts) 

Add the desired font to the `<head>` of your HTML document

```html
<link
    href="https://cdn.jsdelivr.net/gh/mshaugh/nerdfont-webfonts@latest/build/jetbrainsmono-nfm.css"
    rel="stylesheet"
/>
```

You can find a list of available Nerd Fonts from [this repository](https://github.com/mshaugh/nerdfont-webfonts)

## Components

- [Details](#details)
- [Badge](#is-~="badge")

---

### `<details>`

Modifies the marker of the `<summary>` element to be a chevron instead of the default `▶︎` and `▼` default triangles

```html
<details>
    <summary>Open</summary>
    <p>Content</p>
</details>
```

#### Scope

```css
details summary::marker { /* ... */ }
details[open] summary::marker { /* ... */ }
```

### `[is-~="badge"]`

Adds additional end cap styles to badges

```html
<span is-="badge">square</span>
<span is-="badge" cap-="round">round</span>
<span is-="badge" cap-="triangle">triangle</span>
<span is-="badge" cap-="ribbon">ribbon</span>
<span is-="badge" cap-="slant-top">slant-top</span>
<span is-="badge" cap-="slant-bottom">slant-bottom</span>
```

![nf-badges.png](../../assets/nf-badges.png)

You can also define a start and end cap by using two values separated by a space

```html
<span is-="badge" cap-="ribbon round">ribbon + round</span>
```

![nf-badge-caps.png](../../assets/nf-badge-caps.png)

#### Cap Values 

<style>
.b {
    color: var(--background0); 
    --badge-color: var(--foreground0);
}
</style>

- `cap-="square"` - <span is-="badge" cap-="square" class="b">square</span>
- `cap-="round"` - <span is-="badge" cap-="round" class="b">round</span>
- `cap-="triangle"` - <span is-="badge" cap-="triangle" class="b">triangle</span>
- `cap-="ribbon"` - <span is-="badge" cap-="ribbon" class="b">ribbon</span>
- `cap-="slant-top"` - <span is-="badge" cap-="slant-top" class="b">slant-top</span>
- `cap-="slant-bottom"` - <span is-="badge" cap-="slant-bottom" class="b">slant-bottom</span>

#### Scope

```css
[is-~="badge"] {
    /* ... */

    &[cap-] { /* ... */ }
}
```
