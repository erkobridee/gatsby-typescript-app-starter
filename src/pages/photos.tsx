import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

import JsonPlaceholderPhotos from 'domains/JsonPlaceholder/photos';

const Photos = () => (
	<Layout displayFooter={false}>
		<FormattedMessage id="photos.pagetitle" defaultMessage="Photos">
			{text => <SEO title={text as string} />}
		</FormattedMessage>
		<JsonPlaceholderPhotos />
	</Layout>
);

export default Photos;
