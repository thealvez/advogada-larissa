# Styling Guidelines

## Styling Approach

Usar CSS custom properties em `src/styles/tokens.css` e estilos globais mínimos em `src/styles/global.css`. Estilos específicos permanecem próximos aos componentes Astro. Não adotar Tailwind ou biblioteca de componentes no MVP sem necessidade demonstrada.

## Global Theme Variables

```css
:root {
  --color-primary: #173b3f;
  --color-secondary: #c6a56b;
  --color-accent: #e9f0ee;
  --color-surface: #ffffff;
  --color-background: #f7f5f0;
  --color-text: #1f2929;
  --color-text-muted: #5a6868;
  --color-focus: #c6a56b;
  --color-error: #a23b3b;

  --font-sans: Inter, system-ui, sans-serif;
  --font-serif: "Cormorant Garamond", Georgia, serif;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --space-6: 3rem;
  --space-7: 4rem;
  --space-8: 6rem;

  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
}
```
