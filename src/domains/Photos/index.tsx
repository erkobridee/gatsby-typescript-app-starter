import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { selectPhotosList, selectHasMore, selectIsFetching } from 'store/ducks/photos/selectors';
import { loadPhotos, resetPhotos } from 'store/ducks/photos/operations';
import PhotoModel from 'data/models/Photos';

import Tiles from 'components/ui/Tiles';
import Tile from 'components/ui/Tile';

import PhotoCard from './PhotoCard';

import './_styles.scss';

const countPerPage = 18;

const Photos: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const photosList = useSelector(selectPhotosList);
	const hasMore = useSelector(selectHasMore);
	const isFetching = useSelector(selectIsFetching);

	React.useEffect(() => {
		dispatch(loadPhotos({ page: 0, countPerPage, previousTotalCount: photosList.length }));
		return () => {
			dispatch(resetPhotos());
		};
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
					<button onClick={onLoadMoreClick}>
						<FormattedMessage id="photos.loadmore" defaultMessage="Load more" />
					</button>
				</div>
			)}

			{isFetching && (
				<div className="photos__hasmore">
					<FormattedMessage id="photos.loading" defaultMessage="Loading..." />
				</div>
			)}
		</div>
	);
};

export default React.memo(Photos);
