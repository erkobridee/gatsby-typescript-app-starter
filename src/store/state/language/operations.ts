import 'intl-pluralrules';
import IntlRelativeTimeFormat from '@formatjs/intl-relativetimeformat';
import { Dispatch } from 'redux';
import { loadLocale } from 'helpers/language';
import { updateLanguage } from './actions';
import { ILanguageAction } from './definitions';

export const changeLanguage = (locale?: string) => async (dispatch: Dispatch<ILanguageAction>) => {
	const { localeData, ...payload } = await loadLocale(locale);
	IntlRelativeTimeFormat.__addLocaleData(localeData);
	dispatch(updateLanguage(payload));
};
