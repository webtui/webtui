# @webtui/plugin-declarative-layout

Provides declarative attribute-based utilities for flexbox CSS and padding that use `ch` and `lh` units

```html
<column gap-="1" pad-="2 1">
    <row align-="between center">
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
    </row>
</column>
```

- `1ch` is the width of one character in a monospace font
- `1lh` is the height of one line in a monospace font

See https://webtui.ironclad.sh/start/tuis-vs-guis/

## Installation

Install the plugin with your preferred package manager

```bash
bun i @webtui/plugin-declarative-layout
npm i @webtui/plugin-declarative-layout
yarn add @webtui/plugin-declarative-layout
pnpm i @webtui/plugin-declarative-layout
```

Import the plugin at the end of your import chain

```css
@import '@webtui/css/base.css';
@import '@webtui/css/components/typography.css';
/* ... */

@import '@webtui/plugin-declarative-layout';
```

## Usage

### Padding

Use the `pad-` attribute to apply padding to any element (not limited to [flex elements](#flexbox)).

The **first keyword** passed to `pad-` is used for **horizontal padding**.
The **last keyword** passed to `pad-` is used for **vertical padding**.
Horizontal padding uses the `ch` unit, vertical padding uses the `lh` unit.

This utility only includes padding from `0` to `2`. If you need more, see how to [extend](#extending) the stylesheet.

```html
<!-- Equivalent of `padding: 1lh 1ch` -->
<div pad-="1"></div>

<!-- Equivalent of `padding: 2lh 2ch` -->
<div pad-="2"></div>

<!-- Equivalent of `padding: 1lh 2ch` -->
<div pad-="2 1"></div>

<!-- Equivalent of `padding: 1lh 0ch` -->
<div pad-="0 1"></div>

<!-- Equivalent of `padding: 1lh 2ch` -->
<div pad-="2 random stuff in middle oh no 1"></div>
```

### Flexbox

Use the `row` and `column` elements to create flexbox containers with `flex-direction: row` and `flex-direction: column` respectively

```html
<row>
    <!-- ... -->
</row>
<column>
    <!-- ... -->
</column>
```

Alternatively, you can use `is-="row"` and `is-="column"` on different elements

```html
<div is-="row">
    <!-- ... -->
</div>
<section is-="column">
    <!-- ... -->
</section>
```

#### Flex Gap

Use `gap-="1"` or `gap-="2"` on rows/columns to add a gap between flex items. This uses the `gap` CSS property.

- A gap of `1ch` or `2ch` will be automatically added between items with `flex-direction: row`
- A gap of `1lh` or `2lh` will be automatically added between items with `flex-direction: column`

You will probably not need to a gap larger than `2`. If you do, see [extending](#extending)

```html
<row gap-="1">
    <span>Item 1</span>
    <span>Item 2</span>
</row>
<column gap-="2">
    <span>Item 1</span>
    <span>Item 2</span>
</column>
```

#### Self-Sizing

Use the `self-` attribute on rows/columns to control how they size themselves

```html
<!-- Equivalent of `flex-grow: 1` -->
<row self-="grow"></row>
<!-- Equivalent of `flex-grow: 0` -->
<row self-="nogrow"></row>
<!-- Equivalent of `flex-shrink: 1` -->
<row self-="shrink"></row>
<!-- Equivalent of `flex-shrink: 0` -->
<row self-="noshrink"></row>
<!-- Equivalent of `flex-basis: 0` -->
<row self-="nobasis"></row>
```

You can combine these attributes by separating them with spaces

```html
<!-- Equivalent of
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
-->
<row self-="grow shrink nobasis"></row>
```

#### Align & Justify

Use the `align-` attribute on rows/columns to control their `align-items` and `justify-content` properties.

##### Note on Syntax

The **first keyword** passed to `align-` is used for `align-items`.
The **last keyword** passed to `align-` is used for `justify-content`.
**There is no `justify-` attribute**.

```html
<!-- Both Equivalent of
    align-items: center
    justify-content: center
-->
<row align-="center"></row>
<row align-="center center"></row>

<!-- Equivalent of 
    align-items: center
    justify-content: space-between
-->
<row align-="center between"></row>

<!-- Equivalent of
    align-items: flex-start
    justify-content: flex-end
-->
<row align-="start never gonna give you up end"></row>

<!-- Equivalent of `justify-content: space-between` -->
<!-- Because `space-between` does not exist for `align-items` -->
<row align-="between"></row>
```

##### Start (`align-items`) values

- `start`
- `end`
- `center`
- `stretch`

##### End (`justify-content`) values

- `start`
- `end`
- `center`
- `between`

## Extending

If you want to add more attributes, you can do so by extending the `utils` layer

```css
@layer utils {
    /* Adds a new variant to the padding utility */
    [pad-] {
        &[pad-^='8'] {
            padding-left: 8ch;
            padding-right: 8ch;
        }

        &[pad-$='8'] {
            padding-top: 8lh;
            padding-bottom: 8lh;
        }
    }

    row,
    column,
    [is-~='row'],
    [is-~='column'] {
        /* Adds a new `gap-` variant to the flexbox utility */
        &[gap-='4'] {
            gap: 4lh 4ch;
        }

        /* Adds a new `self-` variant to the flexbox utility */
        &[self-~='grow-2'] {
            flex-grow: 2;
        }

        /* Adds a new `align-items` value to the align- property */
        &[align-^='start-but-not-flex-start'] {
            align-items: start;
        }

        /* Adds a new `justify-content` value to the align- property */
        &[align-$='end-but-not-flex-end'] {
            justify-content: end;
        }
    }
}
```
