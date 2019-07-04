import { IRootState } from 'store/definitions';

export const selectLanguage = (state: IRootState) => state.language;

export const selectLocale = (state: IRootState) => selectLanguage(state).locale;

export const selectMessages = (state: IRootState) => selectLanguage(state).messages;
