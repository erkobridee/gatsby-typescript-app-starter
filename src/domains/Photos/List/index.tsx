import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps /*, navigate*/ } from '@reach/router';
import { /*withPrefix,*/ navigate } from 'gatsby';

import { selectPhotosList, selectHasMore, selectIsFetching } from 'store/state/photos/selectors';
import { loadPhotos } from 'store/state/photos/operations';
import PhotoModel from 'data/models/Photos';

import SEO from 'components/SEO';
import { Tiles, Tile } from 'components/ui/Tiles';

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
  }, []);

  // const navigateToPhoto = (id: number) => () => navigate(`/gatsby-typescript-app-starter/photos/${id}`);
  const navigateToPhoto = (id: number) => () => navigate(`/photos/${id}`);

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
        {(text) => {
          const title = ReactDOMServer.renderToString(<>{text}</>);
          return <SEO title={title} />;
        }}
      </FormattedMessage>

      <div className="photos">
        <Tiles className="photos__tiles">{photosList.map(buildTileElement)}</Tiles>

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

export default PhotosList;
