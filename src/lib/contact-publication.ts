import type { SiteContent } from '../types/site';

const forbiddenContactPatterns = [
  /example\./i,
  /teste/i,
  /seu-?email/i,
  /0{6,}/,
  /123456/,
];

export function assertNoPlaceholderContacts(contacts: SiteContent['contacts']) {
  for (const value of Object.values(contacts)) {
    if (value && forbiddenContactPatterns.some((pattern) => pattern.test(value))) {
      throw new Error(`Contato suspeito de placeholder: ${value}`);
    }
  }
}

export function hasOfficialContact(contacts: SiteContent['contacts']) {
  return Object.values(contacts).some(Boolean);
}
