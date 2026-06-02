# Advogada Larissa Product Requirements Document (PRD)

## Goals and Background Context

### Goals

- Criar presença digital institucional própria para a Advogada Larissa.
- Comunicar atendimento jurídico online disponível em todo o Brasil.
- Apresentar claramente Direito Previdenciário, Direito Criminal, Direito Digital e Direito Trabalhista.
- Facilitar o contato por canais digitais oficiais em até dois cliques.
- Entregar uma base responsiva, acessível, performática e preparada para SEO.
- Manter comunicação informativa e sóbria compatível com publicidade jurídica.

### Background Context

A Advogada Larissa precisa de um site institucional inspirado na estrutura do site [GJS Advogados](https://gjsadvogados.com.br/), sem copiar sua identidade ou conteúdo. O projeto deve organizar informações profissionais, áreas jurídicas, processo de atendimento online e contato em uma experiência simples para visitantes de todo o Brasil.

O MVP será planejado como site frontend institucional. Identidade visual, biografia, registro profissional e canais oficiais ainda não foram fornecidos; portanto, a implementação deverá manter esses dados centralizados e explicitamente provisórios até aprovação da cliente.

### Change Log

| Date | Version | Description | Author |
| --- | --- | --- | --- |
| 2026-05-30 | 0.1 | Rascunho inicial em modo YOLO a partir do project brief | Morgan (`@pm`) |

## Requirements

### Functional

- **FR1:** O site deve apresentar a marca provisória “Advogada Larissa” enquanto a identidade oficial não for fornecida.
- **FR2:** O site deve exibir uma apresentação institucional da profissional com conteúdo provisório claramente substituível.
- **FR3:** O site deve informar que o atendimento é realizado online em todo o território nacional.
- **FR4:** O site deve apresentar as áreas Direito Previdenciário, Direito Criminal, Direito Digital e Direito Trabalhista.
- **FR5:** Cada área de atuação deve possuir conteúdo introdutório próprio, informativo e acessível pela navegação principal ou pela página inicial.
- **FR6:** O site deve explicar o processo de atendimento em etapas simples.
- **FR7:** O site deve apresentar CTAs de contato em pontos relevantes da navegação, usando canais oficiais quando fornecidos.
- **FR8:** Enquanto os canais oficiais não forem fornecidos, os CTAs devem usar configuração provisória centralizada e não devem direcionar a dados fictícios em produção.
- **FR9:** O site deve disponibilizar uma seção de contato com os dados oficiais aprovados pela cliente.
- **FR10:** O site deve disponibilizar acesso à política de privacidade.
- **FR11:** O site deve fornecer navegação responsiva com menu funcional em dispositivos móveis.
- **FR12:** O site deve conter metadados básicos de SEO, estrutura semântica e conteúdo indexável.
- **FR13:** Caso seja incluído formulário de contato, sua ativação dependerá de aprovação explícita e definição do tratamento de dados.

### Non Functional

- **NFR1:** A interface deve ser responsiva em celular, tablet e desktop.
- **NFR2:** O design deve ser sóbrio, legível e adequado a um site institucional jurídico.
- **NFR3:** A implementação deve buscar conformidade WCAG 2.2 nível AA nos componentes do MVP.
- **NFR4:** O site deve priorizar carregamento rápido, imagens otimizadas e boas práticas de Core Web Vitals.
- **NFR5:** O conteúdo deve ser objetivo, verdadeiro e informativo, sem promessa de resultado, autoengrandecimento ou captação indevida.
- **NFR6:** Conteúdos provisórios e dados oficiais devem ficar centralizados para substituição segura antes da publicação.
- **NFR7:** O site deve oferecer metadados adequados para compartilhamento e mecanismos de busca.
- **NFR8:** O site deve evitar dependência de backend enquanto não houver requisito validado que justifique essa complexidade.
- **NFR9:** A publicação definitiva depende de revisão da cliente sobre textos, identidade, OAB, seccional e canais oficiais.

## User Interface Design Goals

### Overall UX Vision

Experiência institucional clara, elegante e mobile-first. O visitante deve compreender rapidamente quem é a profissional, quais áreas são atendidas, que o atendimento ocorre online nacionalmente e como iniciar contato.

### Key Interaction Paradigms

- Navegação simples por âncoras ou páginas institucionais curtas.
- Conteúdo escaneável com títulos objetivos e cards de áreas jurídicas.
- CTAs visíveis sem linguagem agressiva.
- Menu mobile compacto e acessível.

### Core Screens and Views

- Página inicial.
- Apresentação profissional.
- Áreas de atuação.
- Processo de atendimento.
- Contato.
- Política de privacidade.

### Accessibility: WCAG AA

O MVP deve usar contraste adequado, hierarquia semântica, foco visível, navegação por teclado, textos alternativos e respeito à preferência de redução de movimento.

### Branding

A identidade será inicialmente genérica e provisória. A direção recomendada é sóbria e contemporânea, evitando replicar a referência. Logotipo, paleta final, tipografia institucional e fotografia profissional dependem de aprovação da cliente.

### Target Device and Platforms: Web Responsive

O site deve funcionar em navegadores modernos em celular, tablet e desktop.

## Technical Assumptions

### Repository Structure: Monorepo

Um único repositório é suficiente para o frontend institucional e sua documentação AIOX. A arquitetura final será definida pelo `@architect`.

### Service Architecture

O MVP deve ser tratado inicialmente como site frontend estático ou com geração estática. Backend, banco de dados e CMS ficam fora do escopo até existir requisito confirmado.

### Testing Requirements

- Testes automatizados para componentes e navegação crítica quando aplicável.
- Verificação de build, lint e typecheck.
- Smoke test das rotas ou seções principais.
- Validação manual responsiva.
- Auditoria básica de acessibilidade e desempenho.

### Additional Technical Assumptions and Requests

- Conteúdos e contatos devem ser centralizados em configuração para facilitar substituições.
- A solução deve permitir evolução posterior para conteúdo editorial, caso CMS seja aprovado.
- Analytics e formulário não devem ser ativados sem validação de privacidade.
- O `@architect` deve escolher stack e hospedagem adequadas ao escopo estático.

## Epic List

### Epic 1: Fundação e Presença Institucional

Estabelecer o projeto frontend, a base visual responsiva e uma página inicial publicável com apresentação provisória, atendimento online nacional e navegação funcional.

### Epic 2: Conteúdo Jurídico e Jornada de Atendimento

Disponibilizar as quatro áreas de atuação, explicar o processo de atendimento e criar uma jornada clara até os canais de contato.

### Epic 3: Publicação, Qualidade e Conformidade

Substituir dados provisórios aprovados, adicionar privacidade e SEO técnico, validar qualidade e preparar a publicação.

## Epic 1: Fundação e Presença Institucional

### Goal

Criar a estrutura técnica e visual inicial do site com uma primeira entrega navegável. Ao final do epic, a visitante deve identificar a profissional, compreender o atendimento online nacional e acessar as principais seções.

### Story 1.1: Inicializar o frontend institucional

As a visitante,  
I want acessar um site institucional rápido e responsivo,  
so that eu consiga conhecer a atuação da profissional em qualquer dispositivo.

#### Acceptance Criteria

1. O projeto frontend executa localmente e gera build de produção.
2. A página inicial contém estrutura semântica básica.
3. O layout se adapta a celular, tablet e desktop.
4. O projeto possui comandos de lint, typecheck, testes e build.

### Story 1.2: Apresentar a identidade provisória e a proposta institucional

As a visitante,  
I want entender quem é a Advogada Larissa e como funciona seu atendimento,  
so that eu possa decidir se devo consultar as áreas disponíveis.

#### Acceptance Criteria

1. A página inicial apresenta a marca provisória “Advogada Larissa”.
2. A página inicial informa atendimento jurídico online nacional.
3. A apresentação usa linguagem institucional informativa.
4. Conteúdo provisório fica centralizado para substituição posterior.

### Story 1.3: Implementar navegação responsiva

As a visitante,  
I want navegar facilmente pelas seções do site,  
so that eu encontre informações e contato sem esforço.

#### Acceptance Criteria

1. O cabeçalho possui navegação para as seções principais.
2. O menu mobile pode ser aberto e fechado por teclado e toque.
3. O foco visual é perceptível nos elementos interativos.
4. A navegação não depende de JavaScript desnecessário para acessar o conteúdo essencial.

## Epic 2: Conteúdo Jurídico e Jornada de Atendimento

### Goal

Apresentar as áreas jurídicas e a dinâmica de atendimento online com conteúdo claro. Ao final do epic, a visitante deve conseguir identificar uma área relevante e acessar um canal de contato.

### Story 2.1: Apresentar áreas de atuação

As a visitante,  
I want visualizar as áreas jurídicas atendidas,  
so that eu identifique se minha necessidade está relacionada à atuação da profissional.

#### Acceptance Criteria

1. O site apresenta Direito Previdenciário, Direito Criminal, Direito Digital e Direito Trabalhista.
2. Cada área possui descrição introdutória própria e informativa.
3. As áreas podem ser acessadas pela página inicial.
4. O conteúdo evita promessa de resultado e linguagem promocional inadequada.

### Story 2.2: Explicar o processo de atendimento online

As a visitante,  
I want entender como iniciar o atendimento online,  
so that eu saiba quais são os próximos passos.

#### Acceptance Criteria

1. O site apresenta etapas objetivas do atendimento.
2. O conteúdo informa que a análise depende do caso concreto.
3. A interface funciona adequadamente em dispositivos móveis.

### Story 2.3: Disponibilizar canais de contato configuráveis

As a visitante,  
I want encontrar um canal oficial de contato rapidamente,  
so that eu possa solicitar atendimento.

#### Acceptance Criteria

1. Os canais de contato são centralizados em configuração.
2. CTAs aparecem em pontos relevantes da jornada.
3. Dados fictícios não são publicados como contatos reais.
4. A ausência de canal oficial é tratada de forma segura antes do deploy público.

## Epic 3: Publicação, Qualidade e Conformidade

### Goal

Preparar a publicação definitiva com dados aprovados, privacidade, SEO e verificações técnicas. Ao final do epic, o site deve estar pronto para deploy público autorizado.

### Story 3.1: Substituir conteúdo provisório por dados aprovados

As a responsável pelo site,  
I want atualizar dados profissionais e canais oficiais,  
so that a publicação apresente informações corretas.

#### Acceptance Criteria

1. Nome profissional, OAB, seccional e canais oficiais aprovados são incluídos.
2. Biografia e identidade visual aprovadas substituem os placeholders disponíveis.
3. Nenhum placeholder inadequado permanece no build de publicação.
4. A cliente revisa os textos antes do deploy público.

### Story 3.2: Implementar privacidade e SEO técnico

As a visitante,  
I want acessar informações institucionais claras e uma política de privacidade,  
so that eu navegue com transparência.

#### Acceptance Criteria

1. O site disponibiliza política de privacidade.
2. Cada página pública possui título e descrição adequados.
3. A estrutura usa HTML semântico e metadados de compartilhamento.
4. Formulário e analytics permanecem desativados se não houver aprovação explícita.

### Story 3.3: Validar qualidade e preparar deploy

As a responsável pelo site,  
I want validar a entrega antes da publicação,  
so that o site público seja estável, acessível e revisado.

#### Acceptance Criteria

1. Lint, typecheck, testes e build passam sem erros.
2. Fluxos críticos passam por smoke test.
3. Responsividade é validada em celular, tablet e desktop.
4. Acessibilidade e desempenho recebem auditoria básica.
5. A publicação ocorre somente após autorização da cliente.

## Checklist Results Report

Rascunho inicial gerado em modo YOLO. A validação formal será executada pelo `@po` após a especificação UX/UI e a arquitetura frontend.

## Next Steps

### UX Expert Prompt

Criar `docs/front-end-spec.md` para o site institucional Advogada Larissa usando este PRD. Definir sitemap, componentes, hierarquia visual, estados responsivos, acessibilidade WCAG AA e identidade provisória sóbria sem copiar a referência.

### Architect Prompt

Após a especificação UX/UI, criar `docs/front-end-architecture.md` para um site institucional frontend inicialmente estático. Escolher stack, estrutura, testes, configuração centralizada de conteúdo, SEO, acessibilidade e estratégia de deploy sem adicionar backend ou CMS não confirmados.
