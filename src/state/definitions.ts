import { ILanguageState } from './ducks/language/definitions';
import { IPhotosState } from './ducks/jsonplaceholderphotos/definitions';

export interface IRootState {
	language: ILanguageState;
	photos: IPhotosState;
}
