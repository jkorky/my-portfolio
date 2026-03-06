/// <reference types="astro/client" />

// Allow TypeScript to resolve .astro component imports (fixes IDE TS2307 when build/lint work)
declare module '*.astro' {
  const component: import('astro').AstroComponentFactory;
  export default component;
}
