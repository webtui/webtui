# @webtui/theme-vitesse

A port of the [Vitesse](https://github.com/antfu/vscode-theme-vitesse) color palette to [WebTUI](https://github.com/webtui/webtui).

Provides additional variants for the listed components in the base WebTUI library and supports both dark (default) and light themes with multiple contrast levels.

## Installation

Install the theme with your preferred package manager

```bash
bun i @webtui/theme-vitesse
npm i @webtui/theme-vitesse
yarn add @webtui/theme-vitesse
pnpm i @webtui/theme-vitesse
```

Ensure you import the theme **after** all the other stylesheets from `@webtui/css` or the styles will not be applied.

```css
@layer base, utils, components;

@import "@webtui/css/base.css";
@import "@webtui/css/components/typography.css";
/* ... */

@import "@webtui/theme-vitesse";
```

Set the `data-webtui-theme` attribute on the `<html>` tag or a container element.

```html
<html data-webtui-theme="vitesse-dark"></html>
```

To only apply the theme to a specific element:

```html
<html data-webtui-theme="dark">
  <!-- Example base theme -->
  <body>
    <div data-webtui-theme="vitesse-light-soft">
      <!-- Vitesse light-soft styles applied here -->
    </div>
    <div data-webtui-theme="vitesse-dark-soft">
      <!-- Vitesse dark-soft styles applied here -->
    </div>
  </body>
</html>
```

## Variants

Supports dark and light modes, each with hard, medium, and soft contrast levels.

```html
<!-- Dark Variants -->
<html data-webtui-theme="vitesse-black">
  <html data-webtui-theme="vitesse-dark-soft">
    <!-- Default: vitesse-dark or vitesse-black -->
    <html data-webtui-theme="vitesse-dark">
      <!-- Light Variants -->
      <html data-webtui-theme="vitesse-light">
          <!-- Default: vitesse-light -->
          <html data-webtui-theme="vitesse-light-soft"></html>
        </html>
      </html>
    </html>
  </html>
</html>
```

## Components

Components affected/modified by the theme:

- [Typography](#typography)
- [Badge](#badge)
- [Button](#button)

### Typography

- Colors headings from `h1` to `h6` using `var(--vitesse-green)`.
- Inline `<a>` tags are underlined and colored `var(--vitesse-blue)`, changing to `var(--vitesse-aqua)` on hover.
- Inline `<code>` tags are colored `var(--vitesse-orange)`.

```html
<h1>Heading 1</h1>
<!-- ... -->
<h6>Heading 6</h6>

<p><a href="https://example.com">Link</a> <code>Inline Code</code></p>
```

### Badge

Adds additional variants to badges matching Vitesse accent colors.

```html
<span is-="badge" variant-="gray">gray</span>
<span is-="badge" variant-="red">red</span>
<!-- ... -->
<span is-="badge" variant-="aqua">aqua</span>
<span is-="badge" variant-="orange">orange</span>
```

### Button

Adds additional variants to buttons matching Vitesse accent colors.

```html
<button variant-="gray">gray</button>
<button variant-="red">red</button>
<!-- ... -->
<button variant-="aqua">aqua</button>
<button variant-="orange">orange</button>
```

## CSS Variables

Adds the following CSS variables within the `base` layer.

Raw color tokens and base semantic variables (`--background*`, `--foreground*`) are defined within theme-specific variant blocks. Dark mode uses bright accents, Light mode uses standard/faded accents.

```css
@layer base {
  /* Common Dark Variables & Semantic Mapping */
  [data-webtui-theme|="vitesse-dark"] {
    /* ... raw dark vars ... */
    --vitesse-orange: #d4976c; /* Dim Orange */

    /* Semantic Mapping (Dark) */
    --background0: var(--vitesse-dark-bg0);
    --background1: var(--vitesse-dark-bg1);
    --background2: var(--vitesse-dark-bg2);
    --background3: var(--vitesse-dark-bg3);
    --foreground0: var(--vitesse-dark-fg1);
    --foreground1: var(--vitesse-dark-fg2);
    --foreground2: var(--vitesse-dark-fg3);
  }

  /* Dark Contrast Specific bg0 */
  [data-webtui-theme="vitesse-dark"] {
    --vitesse-dark-bg0: #121212;
  }
  [data-webtui-theme="vitesse-dark-soft"] {
    --vitesse-dark-bg0: #222;
  }
  [data-webtui-theme="vitesse-black"] {
    --vitesse-dark-bg0: #000000;
  }

  /* Common Light Variables & Semantic Mapping */
  [data-webtui-theme|="vitesse-light"] {
    /* ... raw light vars ... */
    --vitesse-orange: #a65e2b; /* Faded Orange */

    /* Semantic Mapping (Light) */
    --background0: var(--vitesse-light-bg0);
    --background1: var(--vitesse-light-bg1);
    --background2: var(--vitesse-light-bg2);
    --background3: var(--vitesse-light-bg3);
    --foreground0: var(--vitesse-light-fg1);
    --foreground1: var(--vitesse-light-fg2);
    --foreground2: var(--vitesse-light-fg3);
  }

  /* Light Contrast Specific bg0 */
  [data-webtui-theme="vitesse-light"] {
    --vitesse-light-bg0: #ffffff;
  }
  [data-webtui-theme="vitesse-light-soft"] {
    --vitesse-light-bg0: #f1f0e9;
  }
}
```
