import { Language, LanguageMeta, Translations } from './types';
import { en } from './en';
import { hi } from './hi';
import { sat } from './sat';
import { or } from './or';
import { bodo } from './bodo';
import { gon } from './gon';
import { bn } from './bn';

export * from './types';

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'EN', name: 'English', nativeName: 'English', script: 'Latin', isTribal: false, region: 'National / All-India' },
  { code: 'HI', name: 'Hindi', nativeName: 'हिन्दी', script: 'देवनागरी', isTribal: false, region: 'National / Official' },
  { code: 'SAT', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ', script: 'Ol Chiki (ᱚᱞ ᱪᱤᱠᱤ)', isTribal: true, badgeText: 'ST 8th Schedule', region: 'Jharkhand, Odisha, Bengal, Assam (Santhal Tribe)' },
  { code: 'OR', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', script: 'Odia Script', isTribal: true, badgeText: '62 ST Communities', region: 'Odisha Tribal Belts & PVTGs' },
  { code: 'BODO', name: 'Bodo', nativeName: "बर'", script: 'Devanagari', isTribal: true, badgeText: 'ST 8th Schedule', region: 'Assam & Bodoland Territorial Region' },
  { code: 'GON', name: 'Gondi', nativeName: 'गोंडी', script: 'Devanagari / Koya', isTribal: true, badgeText: 'Central Tribal Belt', region: 'MP, Chhattisgarh, Maharashtra, Telangana' },
  { code: 'BN', name: 'Bengali', nativeName: 'বাংলা', script: 'Bengali Script', isTribal: true, badgeText: 'Eastern ST Belts', region: 'West Bengal & Tripura Tribal Belts' },
];

export const translations: Record<Language, Translations> = {
  EN: en,
  HI: hi,
  SAT: sat,
  OR: or,
  BODO: bodo,
  GON: gon,
  BN: bn,
};

export function getTranslation(lang?: Language): Translations {
  if (!lang) return translations.EN;
  return translations[lang] || translations.EN;
}
