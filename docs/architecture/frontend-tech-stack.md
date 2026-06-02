# Frontend Tech Stack

## Technology Stack Table

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
