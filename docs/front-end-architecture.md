# Advogada Larissa Frontend Architecture Document

## Architecture Summary

O MVP será um site institucional gerado estaticamente com Astro e TypeScript estrito. A solução prioriza desempenho, SEO, baixo custo operacional e simplicidade de manutenção. Não haverá backend, banco de dados, autenticação ou CMS no MVP.

Astro é adequado porque gera sites estáticos por padrão, suporta TypeScript diretamente e permite evolução futura para coleções de conteúdo caso um blog seja aprovado. Referências oficiais:

- [Astro TypeScript Guide](https://docs.astro.build/en/guides/typescript/)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
- [Astro Content Collections](https://v6.docs.astro.build/en/guides/content-collections/)
- [Astro Testing Guide](https://docs.astro.build/en/guides/testing/)

## Template and Framework Selection

### Decision

Inicializar o projeto com o starter mínimo oficial do Astro e TypeScript em modo `strict`. Usar saída estática padrão. A versão exata das dependências deverá ser registrada no `package-lock.json` no momento do scaffold.

### Rationale

- O conteúdo principal é institucional e indexável.
- O MVP não precisa de hidratação generalizada no cliente.
- O build estático simplifica hospedagem, segurança e desempenho.
- A arquitetura continua aberta para páginas editoriais futuras por meio de content collections.

### Change Log

| Date | Version | Description | Author |
| --- | --- | --- | --- |
| 2026-05-30 | 0.1 | Arquitetura frontend inicial em modo YOLO | Aria (`@architect`) |

## Frontend Tech Stack

### Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
| --- | --- | --- | --- | --- |
| Framework | Astro | Fixada no scaffold | Site estático e páginas públicas | Adequado para conteúdo institucional e SEO |
| Language | TypeScript | Fixada no scaffold | Tipagem de conteúdo e configuração | Reduz erros em dados provisórios e componentes |
| UI Library | Componentes Astro próprios | N/A | Interface institucional | Evita dependências desnecessárias |
| State Management | Estado local mínimo | N/A | Menu mobile e interações simples | Não há estado global no MVP |
| Routing | File-based routing do Astro | Integrado | Rotas públicas | Solução nativa e simples |
| Build Tool | Vite via Astro | Integrado | Build e dev server | Faz parte da stack Astro |
| Styling | CSS custom properties + CSS escopado | N/A | Tokens e estilos responsivos | Controle direto com baixo custo |
| Unit Testing | Vitest | Fixada no scaffold | Testes de funções e configuração | Integração recomendada para projetos Astro |
| E2E Testing | Playwright | Fixada no scaffold | Smoke tests e navegação crítica | Testa fluxo real em navegadores |
| Accessibility | axe via Playwright ou auditoria equivalente | Fixada no scaffold | Verificação automatizada básica | Complementa validação manual WCAG |
| Deployment | Hospedagem estática a definir | N/A | Publicação do diretório `dist` | Astro suporta múltiplos hosts estáticos |

## Project Structure

```text
/
├── docs/
│   ├── project-brief.md
│   ├── prd.md
│   ├── front-end-spec.md
│   └── front-end-architecture.md
├── public/
│   ├── favicon.svg
│   ├── images/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── ButtonLink.astro
│   │   │   ├── Container.astro
│   │   │   └── SectionHeading.astro
│   │   ├── molecules/
│   │   │   ├── ContactLink.astro
│   │   │   └── PracticeAreaCard.astro
│   │   └── organisms/
│   │       ├── ContactSection.astro
│   │       ├── Footer.astro
│   │       ├── Header.astro
│   │       ├── HeroSection.astro
│   │       ├── PracticeAreasSection.astro
│   │       └── ProcessSection.astro
│   ├── content/
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── areas/
│   │   │   └── [slug].astro
│   │   ├── index.astro
│   │   └── politica-de-privacidade.astro
│   ├── styles/
│   │   ├── global.css
│   │   └── tokens.css
│   └── types/
│       └── site.ts
├── tests/
│   ├── e2e/
│   │   └── site.spec.ts
│   └── unit/
│       └── site-content.test.ts
├── astro.config.mjs
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── vitest.config.ts
```

## Content Architecture

Todo conteúdo provisório ou dependente da cliente deve ficar em `src/content/site.ts`. Componentes não devem conter WhatsApp, e-mail, OAB, textos institucionais ou URLs de redes sociais diretamente.

```ts
export interface PracticeArea {
  slug: string;
  title: string;
  summary: string;
  description: string;
}

export interface SiteContent {
  professionalName: string;
  oabLabel?: string;
  onlineServiceLabel: string;
  biography: string;
  contacts: {
    whatsapp?: string;
    email?: string;
    instagram?: string;
  };
  practiceAreas: PracticeArea[];
}
```

### Publication Guard

Criar uma função de validação executada no build ou nos testes para impedir deploy público com placeholders proibidos ou contato fictício. Dados opcionais ausentes devem ocultar componentes relacionados, não gerar links inválidos.

## Component Standards

### Component Template

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

### Naming Conventions

- Componentes Astro: `PascalCase.astro`.
- Arquivos de conteúdo e utilitários TypeScript: `kebab-case.ts`.
- Classes CSS: nomes semânticos em `kebab-case`.
- Tokens CSS: prefixo `--color-`, `--space-`, `--font-`, `--radius-`.
- Rotas públicas: URLs legíveis em português e `kebab-case`.

## State Management

O MVP não exige store global. O único estado interativo previsto é o menu mobile.

### Mobile Menu Pattern

- Usar HTML semântico e JavaScript mínimo.
- Manter `aria-expanded` sincronizado.
- Permitir fechamento com tecla `Escape`.
- Gerenciar foco adequadamente.
- Não ocultar conteúdo essencial de mecanismos de busca.

## API Integration

Não existe API no MVP. Links de contato são derivados de configuração local validada. Caso formulário seja aprovado posteriormente, sua arquitetura deverá ser especificada em nova story com requisitos de privacidade, destino dos dados, tratamento de falhas e proteção contra spam.

## Routing

| Route | Purpose |
| --- | --- |
| `/` | Página inicial institucional |
| `/areas/[slug]` | Página informativa para cada área jurídica |
| `/politica-de-privacidade` | Política de privacidade |

As páginas de áreas devem ser geradas estaticamente a partir de `practiceAreas`.

## Styling Guidelines

### Styling Approach

Usar CSS custom properties em `src/styles/tokens.css` e estilos globais mínimos em `src/styles/global.css`. Estilos específicos permanecem próximos aos componentes Astro. Não adotar Tailwind ou biblioteca de componentes no MVP sem necessidade demonstrada.

### Global Theme Variables

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

## SEO Strategy

- Definir título, descrição e URL canônica por rota.
- Incluir Open Graph básico.
- Usar HTML semântico, headings consistentes e conteúdo renderizado no build.
- Criar `robots.txt` e sitemap.
- Evitar claims promocionais não aprovados.
- Revisar estratégia editorial somente se blog for confirmado.

## Accessibility Requirements

- Buscar WCAG 2.2 AA.
- Garantir contraste, foco visível, teclado, landmarks e headings.
- Respeitar `prefers-reduced-motion`.
- Exigir textos alternativos para imagens informativas.
- Manter labels explícitos se formulário for incluído futuramente.
- Executar auditoria automatizada e revisão manual.

## Testing Requirements

### Unit Tests

- Validar schema de conteúdo.
- Bloquear placeholders proibidos em build público.
- Garantir presença das quatro áreas confirmadas.

### E2E Smoke Tests

- Carregar página inicial.
- Navegar para cada área.
- Abrir e fechar menu mobile.
- Verificar política de privacidade.
- Confirmar que contatos ausentes não geram links inválidos.
- Executar auditoria básica de acessibilidade.

### Quality Commands

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```

## Environment Configuration

O MVP não exige segredos. Se futuramente houver integrações, usar variáveis prefixadas conforme as convenções do Astro e nunca expor credenciais privadas no frontend.

```dotenv
# Opcional para controlar validações de publicação
PUBLIC_SITE_URL=https://example.com
PUBLIC_RELEASE_STAGE=development
```

## Deployment Strategy

- Gerar saída estática em `dist/`.
- Selecionar hospedagem estática durante a etapa `@devops`.
- Configurar domínio próprio, HTTPS e deploy automatizado após definição do repositório remoto.
- Bloquear deploy público enquanto dados profissionais e canais oficiais não forem aprovados.

## Frontend Developer Standards

### Critical Coding Rules

1. Não codificar conteúdo profissional diretamente em componentes.
2. Não publicar telefone, e-mail ou WhatsApp fictícios.
3. Não adicionar backend, CMS, analytics ou formulário fora de story aprovada.
4. Não usar claims, métricas, depoimentos ou promessas de resultado sem revisão.
5. Preservar HTML semântico e acessibilidade em componentes interativos.
6. Otimizar imagens antes de adicioná-las ao repositório.
7. Executar quality gates antes de concluir cada story.

### Quick Reference

```bash
npm run dev
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```

## Architectural Decision Records

### ADR-001: Usar geração estática

**Decision:** site estático como padrão.  
**Reason:** o MVP é institucional e não possui requisitos dinâmicos confirmados.  
**Consequence:** menor custo e menor superfície de risco; recursos dinâmicos exigirão novas stories.

### ADR-002: Não incluir CMS no MVP

**Decision:** manter conteúdo local tipado.  
**Reason:** autonomia editorial não foi confirmada.  
**Consequence:** evolução para content collections ou CMS permanece possível.

### ADR-003: Não incluir framework cliente

**Decision:** usar componentes Astro e JavaScript mínimo.  
**Reason:** interações atuais não justificam React, Vue ou store global.  
**Consequence:** menor bundle e manutenção mais simples.

## PRD Impact Assessment

Não é necessário adicionar epics ou stories ao PRD. A arquitetura concretiza as suposições já declaradas: frontend estático, conteúdo centralizado e páginas separadas por área para melhorar clareza e SEO.

## Next Steps

1. Validar brief, PRD, UX/UI spec e arquitetura com `@po`.
2. Gerar shards de documentação.
3. Criar a primeira story com `@sm`.
4. Executar bootstrap de ambiente e repositório com `@devops` antes da implementação.
