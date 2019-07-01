import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPhotosList } from 'state/ducks/photos/selectors';
import { loadPhotos } from 'state/ducks/photos/operations';

import './_styles.scss';

const toJSON = (value: any) => JSON.stringify(value, null, 2);

const JsonPlaceholderPhotos: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const photosList = useSelector(selectPhotosList);
	const photosListString = toJSON(photosList);

	React.useEffect(() => {
		dispatch(loadPhotos());
	}, []);

	return (
		<div className="jsonplaceholder-photos">
			<p>
				<strong>TODO:</strong> define UI
			</p>
			<pre>{photosListString}</pre>
		</div>
	);
};

export default JsonPlaceholderPhotos;
