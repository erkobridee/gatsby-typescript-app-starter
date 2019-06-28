import * as React from 'react';
import { Link } from 'gatsby';

interface IHeader {
	siteTitle: string;
}

const Header: React.FunctionComponent<IHeader> = ({ siteTitle }) => (
	<header
		style={{
			background: `rebeccapurple`,
			marginBottom: `1.45rem`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
);

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
