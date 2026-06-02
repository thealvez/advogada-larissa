import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { siteContent } from '../../src/content/site';

describe('practice areas journey', () => {
  it('provides an informative description for each confirmed practice area', () => {
    for (const area of siteContent.practiceAreas) {
      expect(area.description.length).toBeGreaterThan(80);
      expect(area.description.toLowerCase()).not.toContain('resultado garantido');
    }
  });

  it('generates area routes from the centralized practice area configuration', () => {
    const page = readFileSync('src/pages/areas/[slug].astro', 'utf8');
    const card = readFileSync('src/components/molecules/PracticeAreaCard.astro', 'utf8');

    expect(page).toContain('siteContent.practiceAreas.map');
    expect(card).toContain('/areas/${area.slug}/');
  });
});
