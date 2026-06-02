# Architectural Decision Records

## ADR-001: Usar geração estática

**Decision:** site estático como padrão.  
**Reason:** o MVP é institucional e não possui requisitos dinâmicos confirmados.  
**Consequence:** menor custo e menor superfície de risco; recursos dinâmicos exigirão novas stories.

## ADR-002: Não incluir CMS no MVP

**Decision:** manter conteúdo local tipado.  
**Reason:** autonomia editorial não foi confirmada.  
**Consequence:** evolução para content collections ou CMS permanece possível.

## ADR-003: Não incluir framework cliente

**Decision:** usar componentes Astro e JavaScript mínimo.  
**Reason:** interações atuais não justificam React, Vue ou store global.  
**Consequence:** menor bundle e manutenção mais simples.
