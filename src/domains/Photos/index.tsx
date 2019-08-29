import * as React from 'react';
import { withPrefix } from 'gatsby';
import { Router, RouteComponentProps } from '@reach/router';
import { useDispatch } from 'react-redux';

import { resetPhotos } from 'store/state/photos/operations';

import PhotosList from './List';
import PhotoView from './View';

export interface IPhotos extends RouteComponentProps {}

const Photos: React.FunctionComponent<IPhotos> = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		return () => {
			dispatch(resetPhotos());
		};
	}, []);

	return (
		<Router basepath={withPrefix('/photos')}>
			<PhotosList path="/" />
			<PhotoView path=":id" />
		</Router>
	);
};

export default Photos;
