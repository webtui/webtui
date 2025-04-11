# @webtui/plugin-nf

Provides additional variants that utilize a [Nerd Font](https://nerdfonts.com) for some of [WebTUI](https://github.com/webtui/webtui)'s base components

## Installation

Install the plugin with your preferred package manager

```bash
bun i @webtui/plugin-nf
npm i @webtui/plugin-nf
yarn add @webtui/plugin-nf
pnpm i @webtui/plugin-nf
```

Import the plugin at the end of your import chain

```css
@import "@webtui/css/base.css";
@import "@webtui/css/components/typography.css";
/* ... */

@import "@webtui/plugin-nf";
```

## Components

- [Details](#details)
- [Badge](#badge)

---

### `<details>`

Modifies the marker of the `<summary>` element to be a chevron instead of the default `▶︎` and `▼` symbols

```html
<details>
    <summary>Open</summary>
    <p>Content</p>
</details>
```

### `Badge`

Adds additional end cap styles to badges

![nf-badges.png](../../assets/nf-badges.png)

#### `cap-`

Use the `cap-` attribute to customize the start and end caps of badges

```html
<span is-="badge">square</span>
<span is-="badge" cap-="round">round</span>
<span is-="badge" cap-="triangle">triangle</span>
```

Passing two values separated by a space styles the start and end caps

```html
<span is-="badge" cap-="square round">square + round</span>
```

![nf-badge-caps.png](../../assets/nf-badge-caps.png)

```html
<span is-="square"></span>
<span is-="round"></span>
<span is-="triangle"></span>
<span is-="ribbon"></span>
<span is-="slant-top"></span>
<span is-="slant-bottom"></span>
```
