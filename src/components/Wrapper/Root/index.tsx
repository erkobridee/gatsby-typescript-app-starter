import * as React from 'react';
import ReduxWraper from 'components/Wrapper/Redux';
import IntlWrapper from 'components/Wrapper/Intl';

const RootWrapper: React.FunctionComponent = ({ children }) => {
  return (
    <ReduxWraper>
      <IntlWrapper>{children}</IntlWrapper>
    </ReduxWraper>
  );
};

export default RootWrapper;
