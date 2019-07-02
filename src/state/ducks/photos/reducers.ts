import createReducer from 'state/helpers/createReducer';
import { IReducerMap } from 'state/helpers/definitions';
import { PhotosActionTypes as Types, IPhotosAction, IPhotosState } from './definitions';

const initialState: IPhotosState = {
	list: [],
	hasMore: true,
	isFetching: false,
};

const reducerMap: IReducerMap<IPhotosState, IPhotosAction> = {
	[Types.LOADED]: ({ list: previousList }, action) => {
		const { payload: { list, hasMore, isFetching } = initialState } = action;
		return {
			list: [...previousList, ...list],
			hasMore,
			isFetching,
		};
	},
	[Types.FETCHING]: state => {
		return {
			...state,
			isFetching: true,
		};
	},
	[Types.FETCH_ERROR]: state => {
		return {
			...state,
			isFetching: false,
		};
	},
	[Types.RESET]: () => initialState,
};

const language = createReducer(initialState)(reducerMap);

export default language;
