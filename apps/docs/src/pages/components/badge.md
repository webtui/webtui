---
layout: "@/layouts/Doc.astro"
title: Badge
---

# ASCII Badges

<style>span {--badge-background-color: var(--green); color: var(--background0)}</style>

<div flex-="row gap:1 wrap">
<span is-="badge">
        Badge
</span>
<span is-="badge" cap-="round">
        round
</span>
<span is-="badge" cap-="triangle">
        triangle
</span>
<span is-="badge" cap-="inverse">
        inverse
</span>
<span is-="badge" cap-="slant-top">
        slant-top
</span>
<span is-="badge" cap-="slant-bottom">
        slant-bottom
</span>
</div>

<div flex-="row gap:1 wrap">
<span is-="badge" cap-="slant-top round">
        slant-top round
</span>
<span is-="badge" cap-="inverse triangle">
        inverse triangle
</span>
<span is-="badge" cap-="slant-top slant-bottom">
        slant-top slant-bottom
</span>
<span is-="badge" cap-="slant-bottom inverse">
        slant-bottom inverse
</span>
</div>

```html
<span is-="badge" cap="round triangle">...</span>
<span is-="badge" cap="slant-top inverse">...</span>
<span is-="badge" cap="inverse triangle">...</span>
```
