import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const SecondPage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>
			<FormattedMessage id="page2.title" defaultMessage="Hi from the second page" />
		</h1>
		<p>
			<FormattedMessage id="page2.welcome" defaultMessage="Welcome to page 2" />
		</p>
		<Link to="/">
			<FormattedMessage id="page2.link" defaultMessage="Go back to the homepage" />
		</Link>
	</Layout>
);

export default SecondPage;
