import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import FontIcon from 'components/ui/FontIcon';
import LanguageSelector from 'components/LanguageSelector';

import './_styles.scss';

const Footer: React.FunctionComponent = () => (
  <div className="layoutfooter">
    <div className="layoutfooter__content">
      <div>
        © {new Date().getFullYear()}, <FormattedMessage id="layout.build-with" defaultMessage="Built with" />
        {` `}
        <a href="https://www.gatsbyjs.org">
          Gatsby <FontIcon name="heart" />
        </a>
      </div>
      <LanguageSelector className="layoutfooter__select" />
    </div>
  </div>
);

export default Footer;
