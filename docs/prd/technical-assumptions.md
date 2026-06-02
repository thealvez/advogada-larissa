# Technical Assumptions

## Repository Structure: Monorepo

Um único repositório é suficiente para o frontend institucional e sua documentação AIOX. A arquitetura final será definida pelo `@architect`.

## Service Architecture

O MVP deve ser tratado inicialmente como site frontend estático ou com geração estática. Backend, banco de dados e CMS ficam fora do escopo até existir requisito confirmado.

## Testing Requirements

- Testes automatizados para componentes e navegação crítica quando aplicável.
- Verificação de build, lint e typecheck.
- Smoke test das rotas ou seções principais.
- Validação manual responsiva.
- Auditoria básica de acessibilidade e desempenho.

## Additional Technical Assumptions and Requests

- Conteúdos e contatos devem ser centralizados em configuração para facilitar substituições.
- A solução deve permitir evolução posterior para conteúdo editorial, caso CMS seja aprovado.
- Analytics e formulário não devem ser ativados sem validação de privacidade.
- O `@architect` deve escolher stack e hospedagem adequadas ao escopo estático.
