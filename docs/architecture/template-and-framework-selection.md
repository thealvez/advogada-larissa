# Template and Framework Selection

## Decision

Inicializar o projeto com o starter mínimo oficial do Astro e TypeScript em modo `strict`. Usar saída estática padrão. A versão exata das dependências deverá ser registrada no `package-lock.json` no momento do scaffold.

## Rationale

- O conteúdo principal é institucional e indexável.
- O MVP não precisa de hidratação generalizada no cliente.
- O build estático simplifica hospedagem, segurança e desempenho.
- A arquitetura continua aberta para páginas editoriais futuras por meio de content collections.

## Change Log

| Date | Version | Description | Author |
| --- | --- | --- | --- |
| 2026-05-30 | 0.1 | Arquitetura frontend inicial em modo YOLO | Aria (`@architect`) |
