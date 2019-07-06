import React from 'react';

import Layout from 'components/Layout';

import Photos from 'domains/Photos';

const PhotosPage = () => (
	<Layout displayFooter={false}>
		<Photos />
	</Layout>
);

export default PhotosPage;
