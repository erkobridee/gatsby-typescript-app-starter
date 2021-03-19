import 'intl-pluralrules';
import { Dispatch } from 'redux';
import { loadLocale } from 'helpers/language';
import { updateLanguage } from './actions';
import { ILanguageAction } from './definitions';

export const changeLanguage = (locale?: string) => async (dispatch: Dispatch<ILanguageAction>) => {
  const { ...payload } = await loadLocale(locale);
  dispatch(updateLanguage(payload));
};
