import { Dispatch } from 'redux';

import { updatePaginationAttributes, hasMoreData } from 'helpers/fetch/pagination';

import * as API from 'data/api/photos';

import { photosLoaded } from './actions';
import { IPhotosAction, IPhotosLoadParams } from './definitions';

export const loadPhotos = (params?: IPhotosLoadParams) => async (dispatch: Dispatch<IPhotosAction>) => {
	const { offset, page, countPerPage } = updatePaginationAttributes(params || { countPerPage: 50 });
	try {
		const responseObject = await API.loadPhotos({ offset, page, countPerPage });
		const { data: list, totalCount = 0 } = responseObject;
		const { length } = list;
		const hasMore = hasMoreData({ length, totalCount });
		dispatch(photosLoaded({ list, hasMore }));
	} catch (e) {
		console.log(e);
	}
};
