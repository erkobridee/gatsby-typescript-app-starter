import { IProjectWindow } from './definitions';
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
