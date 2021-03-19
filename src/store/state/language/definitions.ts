import { IAction } from 'store/helpers/definitions';

export enum LanguageActionTypes {
  UPDATE = 'language/UPDATE',
  RESET = 'language/RESET',
}

export interface ILanguageState {
  locale: string;
  messages?: { [key: string]: string };
}

export interface ILanguageAction extends IAction<ILanguageState> {}
