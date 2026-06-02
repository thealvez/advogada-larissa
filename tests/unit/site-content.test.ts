import { describe, expect, it } from 'vitest';
import { siteContent } from '../../src/content/site';

describe('provisional site content', () => {
  it('defines the approved provisional identity and national online service', () => {
    expect(siteContent.professionalName).toBe('Doutora Larissa Azevedo');
    expect(siteContent.serviceLabel).toContain('todo o Brasil');
  });

  it('keeps official contacts empty until the client approves them', () => {
    expect(siteContent.contacts).toEqual({});
  });

  it('marks the incomplete values as demonstration content', () => {
    expect(siteContent.demonstrationNotice).toContain('Versão demonstrativa');
    expect(siteContent.demonstrationContacts).toEqual(
      expect.arrayContaining([{ label: 'OAB', value: '09-009' }]),
    );
  });

  it('defines the four confirmed practice areas', () => {
    expect(siteContent.practiceAreas.map((area) => area.slug)).toEqual([
      'direito-previdenciario',
      'direito-criminal',
      'direito-digital',
      'direito-trabalhista',
    ]);
  });
});
