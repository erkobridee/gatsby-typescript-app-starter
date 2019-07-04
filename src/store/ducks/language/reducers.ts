import { browserLocale } from 'helpers/language';
import createReducer from 'store/helpers/createReducer';
import { IReducerMap } from 'store/helpers/definitions';
import { LanguageActionTypes as Types, ILanguageAction, ILanguageState } from './definitions';

const initialState: ILanguageState = {
	locale: browserLocale,
};

const reducerMap: IReducerMap<ILanguageState, ILanguageAction> = {
	[Types.UPDATE]: (_, action) => {
		const { payload } = action;
		return payload || initialState;
	},
	[Types.RESET]: () => initialState,
};

const language = createReducer(initialState)(reducerMap);

export default language;
