import { Dispatch } from 'redux';
import { addLocaleData } from 'react-intl';
import { loadLocale } from 'helpers/language';
import { updateLanguage } from './actions';
import { ILanguageAction } from './definitions';

export const changeLanguage = (locale?: string) => async (dispatch: Dispatch<ILanguageAction>) => {
	const { localeData, ...payload } = await loadLocale(locale);
	addLocaleData(localeData);
	dispatch(updateLanguage(payload));
};
