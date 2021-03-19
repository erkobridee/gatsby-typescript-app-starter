import * as React from 'react';
import { Link } from 'gatsby';

import './_styles.scss';

interface IHeader {
  siteTitle: string;
}

const Header: React.FunctionComponent<IHeader> = ({ siteTitle = '' }) => (
  <div className="layoutheader">
    <div className="layoutheader__content">
      <div className="layoutheader__title">
        <Link to="/" className="layoutheader__link">
          {siteTitle}
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
