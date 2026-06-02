import { describe, expect, it } from 'vitest';
import { siteContent } from '../../src/content/site';
import { assertNoPlaceholderContacts, hasOfficialContact } from '../../src/lib/contact-publication';

describe('contact publication guard', () => {
  it('allows the safe local fallback while official channels are pending', () => {
    expect(siteContent.contacts).toEqual({});
    expect(hasOfficialContact(siteContent.contacts)).toBe(false);
    expect(() => assertNoPlaceholderContacts(siteContent.contacts)).not.toThrow();
  });

  it('rejects common fictitious contact placeholders', () => {
    expect(() => assertNoPlaceholderContacts({ email: 'contato@example.com' })).toThrow(
      'Contato suspeito de placeholder',
    );
    expect(() => assertNoPlaceholderContacts({ whatsapp: 'https://wa.me/5500000000000' })).toThrow(
      'Contato suspeito de placeholder',
    );
  });

  it('accepts a plausible official channel', () => {
    expect(() => assertNoPlaceholderContacts({ email: 'contato@larissa.adv.br' })).not.toThrow();
  });
});
