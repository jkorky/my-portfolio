## Layout and Grid

These are my Figma grid settings, which I mirror in code via a responsive `Container` component and breakpoints.

### Desktop (1280px)

- 12 columns
- Type: center
- Column width: 82px
- Gutter: 24px
- Margin: 64px (handled in the `Container` component in code)

### Tablet (768px)

- 8 columns
- Type: stretch
- Margin: 32px
- Gutter: 24px

### Mobile (390px)

- 4 columns
- Type: stretch
- Margin: 16px
- Gutter: 16px
- Designed around the 44px minimum touch target rule

In code, the responsive behavior is driven by the breakpoint mixins built on top of exported tokens.

