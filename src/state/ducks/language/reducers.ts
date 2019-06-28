import { browserLocale } from 'helpers/language';
import createReducer from 'state/helpers/createReducer';
import { IReducerMap } from 'state/helpers/definitions';
import { LanguageActionTypes as Types, ILanguageAction, ILanguageState } from './definitions';

const initialState: ILanguageState = {
	locale: browserLocale,
};

const reducerMap: IReducerMap<ILanguageState, ILanguageAction> = {
	[Types.UPDATE]: (_, action) => {
		const { payload = browserLocale } = action;
		return {
			locale: payload,
		};
	},
	[Types.RESET]: () => initialState,
};

const language = createReducer(initialState)(reducerMap);

export default language;
