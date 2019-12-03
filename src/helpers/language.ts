import { ILocale, IProjectWindow } from './definitions';
import { isBrowser } from './check';

export const defaultLocale = 'en';

const { navigator = { language: defaultLocale } } = isBrowser ? (window as IProjectWindow) : {};

export const browserLanguage = navigator.language;

export const browserLocale = (() => {
	let output = browserLanguage;
	if (/-|_/.test(output)) {
		['-', '_'].forEach(languageSparator => {
			if (output.lastIndexOf(languageSparator) !== -1) {
				output = output.split(languageSparator)[0];
			}
		});
	}
	return output;
})();

export async function loadLocale(locale?: string): Promise<ILocale> {
	let messages;
	let localeData;
	switch (locale) {
		case 'pt':
			messages = (await import(
				/* webpackMode: "lazy", webpackChunkName: "language_pt" */ `assets/languages/pt.json`
			)).default;
			localeData = (await import(
				/* webpackMode: "lazy", webpackChunkName: "language_pt" */ `@formatjs/intl-relativetimeformat/dist/locale-data/pt.json`
			)).default;
			return { locale, messages, localeData };
		case 'es':
			messages = (await import(
				/* webpackMode: "lazy", webpackChunkName: "language_es" */ `assets/languages/es.json`
			)).default;
			localeData = (await import(
				/* webpackMode: "lazy", webpackChunkName: "language_es" */ `@formatjs/intl-relativetimeformat/dist/locale-data/es.json`
			)).default;
			return { locale, messages, localeData };
		case 'en':
		default:
			locale = 'en';
			messages = (await import(
				/* webpackMode: "lazy", webpackChunkName: "language_en" */ `assets/languages/en.json`
			)).default;
			localeData = (await import(
				/* webpackMode: "lazy", webpackChunkName: "language_en" */ `@formatjs/intl-relativetimeformat/dist/locale-data/en.json`
			)).default;
			return { locale, messages, localeData };
	}
}
