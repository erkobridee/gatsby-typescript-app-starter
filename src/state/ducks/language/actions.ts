import { LanguageActionTypes as Types, ILanguageAction, ILanguageState } from './definitions';

export const updateLanguage = (payload: ILanguageState): ILanguageAction => ({
	type: Types.UPDATE,
	payload,
});

export const resetLanguage = (): ILanguageAction => ({
	type: Types.RESET,
});
