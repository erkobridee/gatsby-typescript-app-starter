import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import PhotosList from './List';
import PhotoView from './View';

export interface IPhotos extends RouteComponentProps {}

const Photos: React.FunctionComponent<IPhotos> = () => (
	<Router basepath="/photos">
		<PhotosList path="/" />
		<PhotoView path=":id" />
	</Router>
);

export default Photos;
