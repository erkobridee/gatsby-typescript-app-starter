import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps, navigate } from '@reach/router';

import { selectPhotosList, selectHasMore, selectIsFetching } from 'store/state/photos/selectors';
import { loadPhotos /*, resetPhotos */ } from 'store/state/photos/operations';
import PhotoModel from 'data/models/Photos';

import SEO from 'components/SEO';
import Tiles from 'components/ui/Tiles';
import Tile from 'components/ui/Tile';

import PhotoCard from 'domains/Photos/Card';

import './_styles.scss';

const countPerPage = 18;

export interface IPhotosList extends RouteComponentProps {}

const PhotosList: React.FunctionComponent<IPhotosList> = () => {
	const dispatch = useDispatch();
	const photosList = useSelector(selectPhotosList);
	const hasMore = useSelector(selectHasMore);
	const isFetching = useSelector(selectIsFetching);

	React.useEffect(() => {
		dispatch(loadPhotos({ page: 0, countPerPage, previousTotalCount: photosList.length }));
		// return () => {
		// 	dispatch(resetPhotos());
		// };
	}, []);

	const navigateToPhoto = (id: number) => () => navigate(`/photos/${id}`);

	const buildTileElement = (item: PhotoModel, index: number) => (
		<Tile key={index} onClick={navigateToPhoto(item.id)}>
			<PhotoCard data={item} />
		</Tile>
	);

	const onLoadMoreClick = () => {
		dispatch(loadPhotos({ countPerPage, previousTotalCount: photosList.length }));
	};

	return (
		<>
			<FormattedMessage id="photos.pagetitle" defaultMessage="Photos">
				{text => <SEO title={text as string} />}
			</FormattedMessage>

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
		</>
	);
};

export default React.memo(PhotosList);
