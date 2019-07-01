import { Dispatch } from 'redux';

import hasMoreData from 'helpers/fetch/hasMoreData';

import * as API from 'data/api/photos';

import { photosLoaded } from './actions';
import { IPhotosAction, IPhotosLoadParams } from './definitions';

export const loadPhotos = (params?: IPhotosLoadParams) => async (dispatch: Dispatch<IPhotosAction>) => {
	const { offset = 4990, countPerPage = 50 } = params || {};
	try {
		const responseObject = await API.loadPhotos({ offset, countPerPage });
		const { data: list, totalCount = 0 } = responseObject;
		const { length } = list;
		const hasMore = hasMoreData({ offset, length, totalCount });
		dispatch(photosLoaded({ list, hasMore }));
	} catch (e) {
		console.log(e);
	}
};
