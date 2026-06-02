# Content Architecture

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

## Publication Guard

Criar uma função de validação executada no build ou nos testes para impedir deploy público com placeholders proibidos ou contato fictício. Dados opcionais ausentes devem ocultar componentes relacionados, não gerar links inválidos.
