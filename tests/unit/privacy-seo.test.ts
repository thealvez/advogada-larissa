import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const layout = readFileSync('src/layouts/BaseLayout.astro', 'utf8');
const privacy = readFileSync('src/pages/politica-de-privacidade.astro', 'utf8');
const terms = readFileSync('src/pages/termos-de-uso.astro', 'utf8');
const home = readFileSync('src/pages/index.astro', 'utf8');
const robots = readFileSync('public/robots.txt', 'utf8');
const sitemap = readFileSync('public/sitemap.xml', 'utf8');

describe('demonstration privacy and technical SEO', () => {
  it('exposes the global demonstration notice and legal draft notices', () => {
    expect(layout).toContain('Site demonstrativo.');
    expect(privacy).toContain('Rascunho demonstrativo - sujeito a revisão antes da publicação definitiva.');
    expect(terms).toContain('Rascunho demonstrativo - sujeito a revisão antes da publicação definitiva.');
  });

  it('uses the shelf photo only as a provisional editorial image', () => {
    expect(home).toContain('src="/images/estante-editorial-provisoria.png"');
    expect(home).toContain('Imagem editorial provisória para avaliação da cliente.');
  });

  it('defines canonical, Open Graph, favicon, robots and sitemap assets', () => {
    expect(layout).toContain('rel="canonical"');
    expect(layout).toContain('property="og:title"');
    expect(layout).toContain('rel="icon" href="/favicon.svg"');
    expect(existsSync('public/favicon.svg')).toBe(true);
    expect(sitemap).toContain('https://advogada-larissa-lac.vercel.app/politica-de-privacidade/');
    expect(sitemap).not.toContain('/#areas');
  });

  it('blocks indexing and crawling while the demonstration content is active', () => {
    expect(layout).toContain('<meta name="robots" content="noindex, nofollow" />');
    expect(robots).toBe('User-agent: *\nDisallow: /\n');
    expect(robots).not.toContain('Sitemap:');
  });

  it('does not add forms or analytics', () => {
    const siteSources = [layout, privacy, terms, home].join('\n').toLowerCase();
    expect(siteSources).not.toContain('<form');
    expect(siteSources).not.toContain('google-analytics');
    expect(siteSources).not.toContain('gtag(');
  });
});
