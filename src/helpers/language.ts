/*
  https://formatjs.io/docs/polyfills/intl-relativetimeformat/
*/
import { shouldPolyfill } from '@formatjs/intl-relativetimeformat/should-polyfill';

import { ILocale, IProjectWindow } from './definitions';
import { isBrowser } from './check';

export const defaultLocale = 'en';

const { navigator = { language: defaultLocale } } = isBrowser ? (window as IProjectWindow) : {};

export const browserLanguage = navigator.language;

export const browserLocale = (() => {
  let output = browserLanguage;
  if (/-|_/.test(output)) {
    ['-', '_'].forEach((languageSparator) => {
      if (output.lastIndexOf(languageSparator) !== -1) {
        output = output.split(languageSparator)[0];
      }
    });
  }
  return output;
})();

const polyfill = async (locale?: string) => {
  if (!shouldPolyfill()) return;

  await import('@formatjs/intl-relativetimeformat/polyfill');

  switch (locale) {
    case 'pt':
      await import(
        /* webpackMode: "lazy", webpackChunkName: "language_pt" */ `@formatjs/intl-relativetimeformat/locale-data/pt`
      );
      break;
    case 'es':
      await import(
        /* webpackMode: "lazy", webpackChunkName: "language_es" */ `@formatjs/intl-relativetimeformat/locale-data/es`
      );
      break;
    case 'en':
    default:
      await import(
        /* webpackMode: "lazy", webpackChunkName: "language_en" */ `@formatjs/intl-relativetimeformat/locale-data/en`
      );
      break;
  }
};

export async function loadLocale(locale?: string): Promise<ILocale> {
  let messages;

  await polyfill(locale);

  switch (locale) {
    case 'pt':
      messages = (await import(/* webpackMode: "lazy", webpackChunkName: "language_pt" */ `assets/languages/pt.json`))
        .default;
      return { locale, messages };
    case 'es':
      messages = (await import(/* webpackMode: "lazy", webpackChunkName: "language_es" */ `assets/languages/es.json`))
        .default;
      return { locale, messages };
    case 'en':
    default:
      locale = 'en';
      messages = (await import(/* webpackMode: "lazy", webpackChunkName: "language_en" */ `assets/languages/en.json`))
        .default;
      return { locale, messages };
  }
}
