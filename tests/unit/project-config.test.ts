import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const packageJson = JSON.parse(
  readFileSync(new URL('../../package.json', import.meta.url), 'utf8'),
) as { scripts: Record<string, string> };

describe('project quality scripts', () => {
  it('defines the required local quality gates', () => {
    expect(packageJson.scripts).toMatchObject({
      dev: 'ASTRO_TELEMETRY_DISABLED=1 astro dev',
      lint: 'ASTRO_TELEMETRY_DISABLED=1 astro check',
      typecheck: 'ASTRO_TELEMETRY_DISABLED=1 astro check',
      test: 'vitest run',
      build: 'ASTRO_TELEMETRY_DISABLED=1 astro build',
    });
  });
});
