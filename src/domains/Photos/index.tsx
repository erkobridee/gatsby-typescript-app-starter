import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPhotosList, selectHasMore, selectIsFetching } from 'state/ducks/photos/selectors';
import { loadPhotos } from 'state/ducks/photos/operations';
import PhotoModel from 'data/models/Photos';

import Tiles from 'components/ui/Tiles';
import Tile from 'components/ui/Tile';

import PhotoCard from './PhotoCard';

import './_styles.scss';

const countPerPage = 18;

const JsonPlaceholderPhotos: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const photosList = useSelector(selectPhotosList);
	const hasMore = useSelector(selectHasMore);
	const isFetching = useSelector(selectIsFetching);

	React.useEffect(() => {
		dispatch(loadPhotos({ countPerPage, previousTotalCount: photosList.length }));
	}, []);

	const buildTileElement = (item: PhotoModel, index: number) => (
		<Tile key={index}>
			<PhotoCard data={item} />
		</Tile>
	);

	const onLoadMoreClick = () => {
		dispatch(loadPhotos({ countPerPage, previousTotalCount: photosList.length }));
	};

	return (
		<div className="photos">
			<Tiles gutter="15px">{photosList.map(buildTileElement)}</Tiles>

			{!isFetching && hasMore && (
				<div className="photos__hasmore">
					<button onClick={onLoadMoreClick}>load more</button>
				</div>
			)}

			{isFetching && <div className="photos__hasmore">Loading...</div>}
		</div>
	);
};

export default JsonPlaceholderPhotos;
