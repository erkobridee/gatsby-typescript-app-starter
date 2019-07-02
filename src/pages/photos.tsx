import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import JsonPlaceholderPhotos from 'domains/Photos';

const Photos = () => (
	<Layout>
		<FormattedMessage id="photos.pagetitle" defaultMessage="Photos">
			{text => <SEO title={text as string} />}
		</FormattedMessage>
		<JsonPlaceholderPhotos />
	</Layout>
);

export default Photos;
