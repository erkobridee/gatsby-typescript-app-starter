import { Dispatch } from 'redux';
import { photosLoaded } from './actions';
import { IPhotosAction } from './definitions';

// TODO: review and update the code
export const loadPhotos = () => async (dispatch: Dispatch<IPhotosAction>) => {
	const URL = 'https://jsonplaceholder.typicode.com/photos?_start=4990&_limit=50';
	const response = await fetch(URL);

	// TODO: remove
	console.log(response);
	console.log(response.headers.get('x-total-count'));

	try {
		const photosList = await response.json();
		dispatch(photosLoaded({ list: photosList, hasMore: false }));
	} catch (e) {
		throw e;
	}
};
