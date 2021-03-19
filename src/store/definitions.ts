import { ILanguageState } from './state/language/definitions';
import { IPhotosState } from './state/photos/definitions';

export interface IRootState {
  language: ILanguageState;
  photos: IPhotosState;
}
