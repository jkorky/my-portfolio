## Figma & Design Tokens

Figma file:  
https://www.figma.com/design/TpDJvVyUFQiFQlM8JCjsDF/My-portfolio?node-id=0-1&p=f&t=0qS9MItfbUK5UN3p-0

I set this project up with a small design-system-like structure in Figma.
Just to try out and learn how it works in the background.

### Exporting tokens

For exporting Figma variables I use:

- Supernova: https://app.supernova.io/
- Supernova Figma Variables Sync:  
  https://www.figma.com/community/plugin/1303357900761384370/supernova-figma-variables-sync
- Variable Scope Manager

Supernova maps Figma variables into design tokens and exports them as SCSS files into `src/styles/tokens/`  
(for example `measures.scss`, `colors.scss`, etc.).
There is default exporter for scss in supernova but maybe there is a way to adjust it or create custom exporter based on that default https://github.com/Supernova-Studio/exporter-scss/tree/master

General mapping docs from Supernova:  
https://learn.supernova.io/latest/design-systems/import-design-system-data/importing-figma-variables/getting-started-z0FfeM44#section-mapping-variables-and-scopes-to-design-tokens-49

### Breakpoints and containers

On top of the raw exported tokens, I have a `breakpoints.scss` file which defines:

- `$breakpoints` map (mobile, tablet, desktop, desktop-lg)
- `$containers` map (max-widths for different breakpoints)
- `@mixin breakpoint-up($breakpoint)` – a helper for `@media (min-width: …)` queries

This gives me a simple API like:

```scss
@include tokens.breakpoint-up('tablet') {
  // tablet and up styles
}
```

So components do not need to know the actual pixel values.

