import { IRootState } from 'state/definitions';

export const selectLanguage = (state: IRootState) => state.language;

export const selectLocale = (state: IRootState) => selectLanguage(state).locale;
