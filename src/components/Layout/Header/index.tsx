import * as React from 'react';
import { Link } from 'gatsby';

import './_styles.scss';

interface IHeader {
	siteTitle: string;
}

const Header: React.FunctionComponent<IHeader> = ({ siteTitle = '' }) => (
	<div className="layoutheader">
		<div className="layoutheader__content">
			<h1 style={{ margin: 0 }}>
				<Link to="/" className="layoutheader__link">
					{siteTitle}
				</Link>
			</h1>
		</div>
	</div>
);

export default Header;
