# @webtui/theme-gruvbox

A port of the [Gruvbox](https://github.com/morhetz/gruvbox) color palette to [WebTUI](https://github.com/webtui/webtui).

Provides additional variants for the listed components in the base WebTUI library and supports both dark (default) and light themes.

## Installation

Ensure you import the theme **after** all the other stylesheets from `@webtui/css`

````css
@layer base, utils, components;

@import '@webtui/css/base.css';
@import '@webtui/css/components/typography.css';
/* ... */

@import '@webtui/theme-gruvbox'; /* Import Gruvbox theme */

## Theme Switching

The theme defaults to dark mode. To enable light mode, add the class `gruvbox-light` or the attribute `data-theme='light'` to an element.

```html
<body class="gruvbox-light"></body>
```

## Components

- [Typography](#typography)
- [Badge](#badge)
- [Button](#button)

### Typography

- Colors headings from `h1` to `h6` using `var(--accent-green)`
- inline `<a>` tags are underlined and colored to be `var(--accent-blue), changing to var(--accent-bright-blue) on hover.`
- inline `<code>` tags are colored to be `var(--accent-orange)`

```html
<h1>Heading 1</h1>
<!-- ... -->
<h6>Heading 6</h6>

<p><a href="https://example.com">Link</a> <code>Inline Code</code></p>
````

### Badge

Adds additional variants to badges matching all custom accent colors

```html
<span is-="badge" variant-="bg0">bg0</span>
<span is-="badge" variant-="bg1">bg1</span>
<span is-="badge" variant-="fg1">fg1</span>
<span is-="badge" variant-="fg2">fg2</span>
<span is-="badge" variant-="gray">gray</span>
<span is-="badge" variant-="red">red</span>
<span is-="badge" variant-="green">green</span>
<span is-="badge" variant-="yellow">yellow</span>
<span is-="badge" variant-="blue">blue</span>
<span is-="badge" variant-="purple">purple</span>
<span is-="badge" variant-="aqua">aqua</span>
<span is-="badge" variant-="orange">orange</span>
<span is-="badge" variant-="bright-red">bright-red</span>
<span is-="badge" variant-="bright-green">bright-green</span>
<span is-="badge" variant-="bright-yellow">bright-yellow</span>
<span is-="badge" variant-="bright-blue">bright-blue</span>
<span is-="badge" variant-="bright-purple">bright-purple</span>
<span is-="badge" variant-="bright-aqua">bright-aqua</span>
<span is-="badge" variant-="bright-orange">bright-orange</span>
```

### Button

Adds additional variants to buttons matching all custom accent colors

```html
<button variant-="bg0">bg0</button>
<button variant-="bg1">bg1</button>
<button variant-="fg1">fg1</button>
<button variant-="fg2">fg2</button>
<button variant-="gray">gray</button>
<button variant-="red">red</button>
<button variant-="green">green</button>
<button variant-="yellow">yellow</button>
<button variant-="blue">blue</button>
<button variant-="purple">purple</button>
<button variant-="aqua">aqua</button>
<button variant-="orange">orange</button>
<button variant-="bright-red">bright-red</button>
<button variant-="bright-green">bright-green</button>
<button variant-="bright-yellow">bright-yellow</button>
<button variant-="bright-blue">bright-blue</button>
<button variant-="bright-purple">bright-purple</button>
<button variant-="bright-aqua">bright-aqua</button>
<button variant-="bright-orange">bright-orange</button>
```

## CSS Variables

Adds the following CSS variables to the `base` layer

```css
@layer utils {
  :root {
    --gb-dark-bg0-h: #1d2021;
    --gb-dark-bg0: #282828;
    --gb-dark-bg0-s: #32302f;
    --gb-dark-bg1: #3c3836;
    --gb-dark-bg2: #504945;
    --gb-dark-bg3: #665c54;
    --gb-dark-bg4: #7c6f64;

    --gb-dark-fg0: #fbf1c7;
    --gb-dark-fg1: #ebdbb2;
    --gb-dark-fg2: #d5c4a1;
    --gb-dark-fg3: #bdae93;
    --gb-dark-fg4: #a89984;
    --gb-dark-gray: #928374;

    --gb-red: #cc241d;
    --gb-green: #98971a;
    --gb-yellow: #d79921;
    --gb-blue: #458588;
    --gb-purple: #b16286;
    --gb-aqua: #689d6a;
    --gb-orange: #d65d0e;

    --gb-bright-red: #fb4934;
    --gb-bright-green: #b8bb26;
    --gb-bright-yellow: #fabd2f;
    --gb-bright-blue: #83a598;
    --gb-bright-purple: #d3869b;
    --gb-bright-aqua: #8ec07c;
    --gb-bright-orange: #fe8019;

    --background0: var(--gb-dark-bg0);
    --background1: var(--gb-dark-bg1);
    --background2: var(--gb-dark-bg2);
    --background3: var(--gb-dark-bg3);

    --foreground0: var(--gb-dark-fg1);
    --foreground1: var(--gb-dark-fg2);
    --foreground2: var(--gb-dark-fg3);
    --foreground-bright: var(--gb-dark-fg0);

    --accent-red: var(--gb-red);
    --accent-green: var(--gb-green);
    --accent-yellow: var(--gb-yellow);
    --accent-blue: var(--gb-blue);
    --accent-purple: var(--gb-purple);
    --accent-aqua: var(--gb-aqua);
    --accent-orange: var(--gb-orange);
    --accent-gray: var(--gb-dark-gray);
  }

  .gruvbox-light,
  [data-theme="light"] {
    --gb-light-bg0-h: #f9f5d7;
    --gb-light-bg0: #fbf1c7;
    --gb-light-bg0-s: #f2e5bc;
    --gb-light-bg1: #ebdbb2;
    --gb-light-bg2: #d5c4a1;
    --gb-light-bg3: #bdae93;
    --gb-light-bg4: #a89984;

    --gb-light-fg0: #282828;
    --gb-light-fg1: #3c3836;
    --gb-light-fg2: #504945;
    --gb-light-fg3: #665c54;
    --gb-light-fg4: #7c6f64;
    --gb-light-gray: #928374;

    --gb-light-bright-red: #9d0006;
    --gb-light-bright-green: #79740e;
    --gb-light-bright-yellow: #b57614;
    --gb-light-bright-blue: #076678;
    --gb-light-bright-purple: #8f3f71;
    --gb-light-bright-aqua: #427b58;
    --gb-light-bright-orange: #af3a03;

    --background0: var(--gb-light-bg0);
    --background1: var(--gb-light-bg1);
    --background2: var(--gb-light-bg2);
    --background3: var(--gb-light-bg3);

    --foreground0: var(--gb-light-fg1);
    --foreground1: var(--gb-light-fg2);
    --foreground2: var(--gb-light-fg3);
    --foreground-bright: var(--gb-light-fg0);

    --accent-gray: var(--gb-light-gray);
  }
}
```

The theme defines semantic aliases for easier use. These aliases automatically switch between dark and light mode values based on the presence of `.gruvbox-light` or `[data-theme]='light'`

```css
:root {
  --background0: var(--gb-dark-bg0);
  --background1: var(--gb-dark-bg1);
  --background2: var(--gb-dark-bg2);
  --background3: var(--gb-dark-bg3);

  --foreground-bright: var(--gb-dark-fg0);
  --foreground0: var(--gb-dark-fg1);
  --foreground1: var(--gb-dark-fg2);
  --foreground2: var(--gb-dark-fg3);

  --accent-red:    var(--gb-red);
  --accent-green:  var(--gb-green);
  --accent-yellow: var(--gb-yellow);
  --accent-blue:   var(--gb-blue);
  --accent-purple: var(--gb-purple);
  --accent-aqua:   var(--gb-aqua);
  --accent-orange: var(--gb-orange);
  --accent-gray:   var(--gb-dark-gray);

  --accent-bright-red:     var(--gb-bright-red);
  --accent-bright-green:   var(--gb-bright-green);
  --accent-bright-yellow:  var(--gb-bright-yellow);
  --accent-bright-blue:    var(--gb-bright-blue);
  --accent-bright-purple:  var(--gb-bright-purple);
  --accent-bright-aqua:    var(--gb-bright-aqua);
  --accent-bright-orange:  var(--gb-bright-orange);
}

.gruvbox-light,
[data-theme='light'] {
  --background0: var(--gb-light-bg0);
  --background1: var(--gb-light-bg1);
  --background2: var(--gb-light-bg2);
  --background3: var(--gb-light-bg3);

  --foreground-bright: var(--gb-light-fg0);
  --foreground0: var(--gb-light-fg1);
  --foreground1: var(--gb-light-fg2);
  --foreground2: var(--gb-light-fg3);

  /* --accent-red:    var(--gb-red); ... etc ... */
  --accent-gray:   var(--gb-light-gray);

  --accent-bright-red:     var(--gb-light-bright-red);
  --accent-bright-green:   var(--gb-light-bright-green);
  --accent-bright-yellow:  var(--gb-light-bright-yellow);
  --accent-bright-blue:    var(--gb-light-bright-blue);
  --accent-bright-purple:  var(--gb-light-bright-purple);
  --accent-bright-aqua:    var(--gb-light-bright-aqua);
  --accent-bright-orange:  var(--gb-light-bright-orange);
}
```
