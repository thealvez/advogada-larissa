import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const headerSource = readFileSync(
  new URL('../../src/components/organisms/Header.astro', import.meta.url),
  'utf8',
);

describe('responsive header structure', () => {
  it('keeps navigation links in semantic HTML', () => {
    expect(headerSource).toContain('<nav');
    expect(headerSource).toContain('href="/#sobre"');
    expect(headerSource).toContain('href="/#areas"');
    expect(headerSource).toContain('href="/#contato"');
  });

  it('renders the approved provisional logo image', () => {
    expect(headerSource).toContain('src="/images/logo-advogada-larissa.png"');
    expect(headerSource).toContain('class="brand-logo"');
  });

  it('implements accessible mobile toggle behavior', () => {
    expect(headerSource).toContain('aria-expanded="false"');
    expect(headerSource).toContain('aria-controls="primary-navigation"');
    expect(headerSource).toContain("event.key === 'Escape'");
    expect(headerSource).toContain('toggle.focus()');
  });
});
