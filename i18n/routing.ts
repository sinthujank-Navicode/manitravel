import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'ta'], // ✅ Use ISO 639-1 code 'ta' for Tamil
  defaultLocale: 'en'
});
