import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPhotosList, selectHasMore } from 'state/ducks/photos/selectors';
import { loadPhotos } from 'state/ducks/photos/operations';
import PhotoModel from 'data/models/Photos';

import Tiles from 'components/ui/Tiles';
import Tile from 'components/ui/Tile';

import PhotoCard from './PhotoCard';

import './_styles.scss';

const JsonPlaceholderPhotos: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const photosList = useSelector(selectPhotosList);
	const hasMore = useSelector(selectHasMore);

	React.useEffect(() => {
		dispatch(loadPhotos({ countPerPage: 50, previousTotalCount: photosList.length }));
	}, []);

	const buildTileElement = (item: PhotoModel, index: number) => (
		<Tile key={index}>
			<PhotoCard data={item} />
		</Tile>
	);

	return (
		<div className="photos">
			<Tiles gutter="15px">{photosList.map(buildTileElement)}</Tiles>

			{hasMore && (
				<div className="photos__hasmore">
					<button>load more</button>
				</div>
			)}
		</div>
	);
};

export default JsonPlaceholderPhotos;
