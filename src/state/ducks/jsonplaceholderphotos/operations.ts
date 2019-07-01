import { Dispatch } from 'redux';

import buildRequest from 'helpers/buildRequest';

import { photosLoaded } from './actions';
import { IPhotosAction } from './definitions';

// TODO: review and update the code
export const loadPhotos = () => async (dispatch: Dispatch<IPhotosAction>) => {
	try {
		const responseObject = await buildRequest({
			urlPath: 'jsonplaceholder.typicode.com/photos',
			parameters: {
				_start: 4990,
				_limit: 50,
			},
		});
		console.log(responseObject);
		const metadata = responseObject.__metadata__;
		console.log(metadata.headers.get('x-total-count'));
		dispatch(photosLoaded({ list: metadata.body, hasMore: false }));
	} catch (e) {
		console.log(e);
	}
};
