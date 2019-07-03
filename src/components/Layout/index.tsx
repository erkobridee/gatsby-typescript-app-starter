/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import LanguageSelector from 'components/LanguageSelector';
import Header from './Header';

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
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0px 1.0875rem 1.45rem`,
					paddingTop: 0,
				}}
			>
				<main>{children}</main>
				{displayFooter && (
					<footer>
						<p>
							© {new Date().getFullYear()},{' '}
							<FormattedMessage id="layout.build-with" defaultMessage="Built with" />
							{` `}
							<a href="https://www.gatsbyjs.org">Gatsby</a>
						</p>
						<LanguageSelector />
					</footer>
				)}
			</div>
		</>
	);
};

export default Layout;
