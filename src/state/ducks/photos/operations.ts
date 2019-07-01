import { Dispatch } from 'redux';

import * as API from 'data/api/photos';

import { photosLoaded } from './actions';
import { IPhotosAction, IPhotosLoadParams } from './definitions';

// TODO: review and update the code
export const loadPhotos = (params?: IPhotosLoadParams) => async (dispatch: Dispatch<IPhotosAction>) => {
	const { offset = 4990, countPerPage = 50, previousTotalCount = 0 } = params || {};
	console.log(previousTotalCount);

	try {
		const responseObject = await API.loadPhotos({ offset, countPerPage });
		console.log(responseObject);
		const { data } = responseObject;
		dispatch(photosLoaded({ list: data, hasMore: false }));
	} catch (e) {
		console.log(e);
	}
};
