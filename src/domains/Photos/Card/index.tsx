import * as React from 'react';

import ImageCard from 'components/ui/ImageCard';
import PhotoModel from 'data/models/Photos';

import './_styles.scss';

export interface IPhotoCard {
	data: PhotoModel;
}

const PhotoCard: React.FunctionComponent<IPhotoCard> = ({ data: { url, title } }) => (
	<div className="photocard">
		<ImageCard url={url} />
		<div className="photocard__title">{title}</div>
	</div>
);

export default PhotoCard;
