import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { siteContent } from '../../src/content/site';

describe('contact and location section', () => {
  const source = readFileSync('src/components/organisms/ContactSection.astro', 'utf8');

  it('keeps physical location optional until the client confirms an address', () => {
    expect(siteContent.officeLocation).toBeUndefined();
    expect(source).toContain('O endereço físico será publicado somente após confirmação da cliente.');
  });

  it('provides a map link only when an official location URL exists', () => {
    expect(source).toContain('officeLocation.mapUrl &&');
    expect(source).toContain('label="Ver no mapa"');
  });
});
