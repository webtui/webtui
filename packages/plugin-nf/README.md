# @webtui/plugin-nf

Provides additional glyphs from popular icon packs such as [Font Awesome](https://fontawesome.com), [Devicons](http://vorillaz.github.io/devicons/), [Octicons](https://github.com/github/octicons), and more (see https://nerdfonts.com)

See https://nerdfonts.com/cheat-sheet for a reference of available icons you can use

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

Add "Symbols Nerd Font" to the **end** of the `--font-family` fallback stack

```css
@layer base {
  :root {
    --font-family: /* fonts */, Menlo, Monaco, monospace, "Symbols Nerd Font";
  }
}
```

Now you can use nerd font icons in your HTML and CSS

```html
<style>
    @layer base {
        :root {
            --font-family: Menlo, Monaco, monospace, "Symbols Nerd Font";
        }
    }

    #rust::before {
        content: "\\e68b";
    }
</style>

<span>I use &#xf36f; and <span id="rust"></span>, btw</span>
```
