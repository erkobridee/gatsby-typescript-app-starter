import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import Photos from 'domains/Photos';

const PhotosPage = () => (
	<Layout displayFooter={false}>
		<FormattedMessage id="photos.pagetitle" defaultMessage="Photos">
			{text => <SEO title={text as string} />}
		</FormattedMessage>
		<Photos />
	</Layout>
);

export default PhotosPage;
