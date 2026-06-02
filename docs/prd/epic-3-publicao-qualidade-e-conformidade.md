# Epic 3: Publicação, Qualidade e Conformidade

## Goal

Preparar a publicação definitiva com dados aprovados, privacidade, SEO e verificações técnicas. Ao final do epic, o site deve estar pronto para deploy público autorizado.

## Story 3.1: Substituir conteúdo provisório por dados aprovados

As a responsável pelo site,  
I want atualizar dados profissionais e canais oficiais,  
so that a publicação apresente informações corretas.

### Acceptance Criteria

1. Nome profissional, OAB, seccional e canais oficiais aprovados são incluídos.
2. Biografia e identidade visual aprovadas substituem os placeholders disponíveis.
3. Nenhum placeholder inadequado permanece no build de publicação.
4. A cliente revisa os textos antes do deploy público.

## Story 3.2: Implementar privacidade e SEO técnico

As a visitante,  
I want acessar informações institucionais claras e uma política de privacidade,  
so that eu navegue com transparência.

### Acceptance Criteria

1. O site disponibiliza política de privacidade.
2. Cada página pública possui título e descrição adequados.
3. A estrutura usa HTML semântico e metadados de compartilhamento.
4. Formulário e analytics permanecem desativados se não houver aprovação explícita.

## Story 3.3: Validar qualidade e preparar deploy

As a responsável pelo site,  
I want validar a entrega antes da publicação,  
so that o site público seja estável, acessível e revisado.

### Acceptance Criteria

1. Lint, typecheck, testes e build passam sem erros.
2. Fluxos críticos passam por smoke test.
3. Responsividade é validada em celular, tablet e desktop.
4. Acessibilidade e desempenho recebem auditoria básica.
5. A publicação ocorre somente após autorização da cliente.
