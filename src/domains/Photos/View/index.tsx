import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { RouteComponentProps /*, Link*/ } from '@reach/router';
import { useSelector } from 'react-redux';

import { selectPhotoById } from 'store/state/photos/selectors';

import SEO from 'components/SEO';

import PhotoCard from 'domains/Photos/Card';

import './_styles.scss';

interface IPhotoViewParams {
  id: string;
}

export interface IPhotoView extends RouteComponentProps<IPhotoViewParams> {}

const PhotoView: React.FunctionComponent<IPhotoView> = ({ id }) => {
  const photo = useSelector(selectPhotoById(Number(id)));
  const info = photo ? photo.id : 'Not Found';
  return (
    <>
      <FormattedMessage id="photo.pagetitle" defaultMessage="Photo {id}" values={{ id: info }}>
        {(text) => {
          const title = ReactDOMServer.renderToString(<>{text}</>);
          return <SEO title={title} />;
        }}
      </FormattedMessage>
      <div className="photo">
        {photo ? (
          <PhotoCard data={photo} />
        ) : (
          <FormattedMessage id="photo.not-found" defaultMessage="Photo: {id} - Not Found" values={{ id }} />
        )}
        <Link to="/photos" className="photo__link">
          <FormattedMessage id="photo.return-to-photos" defaultMessage="Return to photos" />
        </Link>
      </div>
    </>
  );
};

export default PhotoView;
