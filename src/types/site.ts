export interface PracticeArea {
  slug: string;
  title: string;
  summary: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface OfficeLocation {
  label: string;
  address: string;
  mapUrl?: string;
}

export interface DemonstrationContact {
  label: string;
  value: string;
}

export interface SiteContent {
  professionalName: string;
  serviceLabel: string;
  heroTitle: string;
  heroDescription: string;
  biography: string;
  demonstrationNotice: string;
  demonstrationContacts: DemonstrationContact[];
  oabExample: string;
  contacts: {
    whatsapp?: string;
    email?: string;
    instagram?: string;
  };
  officeLocation?: OfficeLocation;
  practiceAreas: PracticeArea[];
  processSteps: ProcessStep[];
}
