import createReducer from 'state/helpers/createReducer';
import { IReducerMap } from 'state/helpers/definitions';
import { PhotosActionTypes as Types, IPhotosAction, IPhotosState } from './definitions';

const initialState: IPhotosState = {
	list: [],
	hasMore: true,
};

const reducerMap: IReducerMap<IPhotosState, IPhotosAction> = {
	[Types.LOADED]: ({ list: previousList }, action) => {
		const { payload: { list, hasMore } = initialState } = action;
		console.log({ previousList, list });
		return {
			list: [...previousList, ...list],
			hasMore,
		};
	},
	[Types.RESET]: () => initialState,
};

const language = createReducer(initialState)(reducerMap);

export default language;
