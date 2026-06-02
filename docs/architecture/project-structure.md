# Project Structure

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
