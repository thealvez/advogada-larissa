import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { siteContent } from '../../src/content/site';

describe('online service process', () => {
  it('defines objective and configurable service steps', () => {
    expect(siteContent.processSteps).toHaveLength(3);

    for (const step of siteContent.processSteps) {
      expect(step.title.length).toBeGreaterThan(5);
      expect(step.description.length).toBeGreaterThan(40);
    }
  });

  it('states that guidance depends on the concrete case', () => {
    const source = readFileSync('src/components/organisms/ProcessSection.astro', 'utf8');

    expect(source).toContain('caso concreto');
    expect(source).toContain('grid-template-columns: repeat(3');
  });
});
