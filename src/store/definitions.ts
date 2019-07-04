import { ILanguageState } from './ducks/language/definitions';
import { IPhotosState } from './ducks/photos/definitions';

export interface IRootState {
	language: ILanguageState;
	photos: IPhotosState;
}
