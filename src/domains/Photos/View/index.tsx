import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from '@reach/router';

import SEO from 'components/SEO';

import './_styles.scss';

interface IPhotoViewParams {
	id: string;
}

export interface IPhotoView extends RouteComponentProps<IPhotoViewParams> {}

const PhotoView: React.FunctionComponent<IPhotoView> = ({ id }) => {
	console.log(id);
	return (
		<>
			<FormattedMessage id="photo.pagetitle" defaultMessage="Photo">
				{text => <SEO title={text as string} />}
			</FormattedMessage>
			<div className="photo">{id}</div>
		</>
	);
};

export default PhotoView;
