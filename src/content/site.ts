import type { SiteContent } from '../types/site';

export const siteContent: SiteContent = {
  professionalName: 'Doutora Larissa Azevedo',
  serviceLabel: 'Atendimento online em todo o Brasil',
  heroTitle: 'Orientação jurídica com clareza e atenção ao seu caso.',
  heroDescription:
    'Atendimento jurídico online para apresentar caminhos possíveis com responsabilidade e atenção às particularidades de cada situação.',
  biography:
    'Larissa Azevedo oferece atendimento jurídico online para pessoas em todo o Brasil, com escuta atenta, comunicação clara e análise individualizada de cada situação. Sua atuação abrange questões previdenciárias, criminais, digitais e trabalhistas. O atendimento é conduzido com responsabilidade e respeito às particularidades de cada caso. As orientações jurídicas dependem da avaliação das informações e dos documentos apresentados, sem promessa de resultado.',
  demonstrationNotice:
    'Versão demonstrativa para avaliação da cliente. Conteúdo, identidade e dados de exemplo estão sujeitos a revisão antes da publicação definitiva.',
  demonstrationContacts: [
    { label: 'OAB', value: '09-009' },
    { label: 'WhatsApp', value: '119888888' },
    { label: 'E-mail', value: 'test@gmail.com' },
    { label: 'Instagram', value: 'teste' },
  ],
  oabExample: '09-009',
  contacts: {},
  practiceAreas: [
    {
      slug: 'direito-previdenciario',
      title: 'Direito Previdenciário',
      summary: 'Orientação jurídica previdenciária com análise individualizada.',
      description:
        'Atendimento para compreender questões previdenciárias, avaliar documentos e esclarecer possibilidades jurídicas conforme as particularidades de cada situação.',
    },
    {
      slug: 'direito-criminal',
      title: 'Direito Criminal',
      summary: 'Atuação orientada pela escuta atenta e pela análise do caso concreto.',
      description:
        'Orientação jurídica em questões criminais com atendimento cuidadoso, análise individualizada e respeito às circunstâncias apresentadas.',
    },
    {
      slug: 'direito-digital',
      title: 'Direito Digital',
      summary: 'Orientação para questões jurídicas relacionadas ao ambiente digital.',
      description:
        'Atendimento para compreender situações relacionadas ao ambiente digital e avaliar os caminhos jurídicos aplicáveis ao caso concreto.',
    },
    {
      slug: 'direito-trabalhista',
      title: 'Direito Trabalhista',
      summary: 'Análise de questões trabalhistas com atendimento online.',
      description:
        'Orientação em questões trabalhistas com análise das informações disponíveis e esclarecimento sobre medidas juridicamente adequadas à situação.',
    },
  ],
  processSteps: [
    {
      title: 'Envie sua solicitação',
      description: 'Utilize um canal oficial para apresentar brevemente a situação e solicitar atendimento.',
    },
    {
      title: 'Compartilhe as informações',
      description: 'Os detalhes e documentos relevantes serão solicitados conforme a necessidade da análise.',
    },
    {
      title: 'Receba orientação jurídica',
      description: 'Após compreender o caso concreto, a profissional poderá esclarecer os caminhos juridicamente adequados.',
    },
  ],
};
