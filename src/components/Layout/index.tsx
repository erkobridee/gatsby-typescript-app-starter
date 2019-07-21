/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

import './_styles.scss';

interface ILayout {
	children: React.ReactNode;
	displayFooter?: boolean;
}

const Layout: React.FunctionComponent<ILayout> = ({ children, displayFooter = true }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div className="layout">
			<Header siteTitle={data.site.siteMetadata.title} />
			<div className="layout__content">{children}</div>
			{displayFooter && <Footer />}
		</div>
	);
};

export default Layout;
