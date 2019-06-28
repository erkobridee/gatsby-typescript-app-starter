import { IAction } from 'src/state/helpers/definitions';

export enum LanguageActionTypes {
	UPDATE = 'language/UPDATE',
	RESET = 'language/RESET',
}

export interface ILanguageAction extends IAction<string> {}

export interface ILanguageState {
	locale: string;
}
