import { describe, expect, it } from 'vitest';
import { siteContent } from '../../src/content/site';

describe('provisional site content', () => {
  it('defines the approved provisional identity and national online service', () => {
    expect(siteContent.professionalName).toBe('Advogada Larissa');
    expect(siteContent.serviceLabel).toContain('todo o Brasil');
  });

  it('keeps official contacts empty until the client approves them', () => {
    expect(siteContent.contacts).toEqual({});
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
