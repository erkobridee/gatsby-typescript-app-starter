import { LanguageActionTypes as Types, ILanguageAction } from './definitions';

export const updateLanguage = (locale: string): ILanguageAction => ({
	type: Types.UPDATE,
	payload: locale,
});

export const resetLanguage = (): ILanguageAction => ({
	type: Types.RESET,
});
