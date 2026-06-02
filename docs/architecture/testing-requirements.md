# Testing Requirements

## Unit Tests

- Validar schema de conteúdo.
- Bloquear placeholders proibidos em build público.
- Garantir presença das quatro áreas confirmadas.

## E2E Smoke Tests

- Carregar página inicial.
- Navegar para cada área.
- Abrir e fechar menu mobile.
- Verificar política de privacidade.
- Confirmar que contatos ausentes não geram links inválidos.
- Executar auditoria básica de acessibilidade.

## Quality Commands

```bash
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```
