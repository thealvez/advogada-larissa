# Component Standards

## Component Template

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<section aria-labelledby="section-title">
  <h2 id="section-title">{title}</h2>
  {description && <p>{description}</p>}
</section>
```

## Naming Conventions

- Componentes Astro: `PascalCase.astro`.
- Arquivos de conteúdo e utilitários TypeScript: `kebab-case.ts`.
- Classes CSS: nomes semânticos em `kebab-case`.
- Tokens CSS: prefixo `--color-`, `--space-`, `--font-`, `--radius-`.
- Rotas públicas: URLs legíveis em português e `kebab-case`.
