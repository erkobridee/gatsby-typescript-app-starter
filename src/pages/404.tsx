import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const NotFoundPage: React.FunctionComponent = () => {
  const [isInitialized, setIsInitialized] = React.useState(false);
  React.useEffect(() => {
    setIsInitialized(true);
  });
  return (
    <Layout>
      {isInitialized && (
        <>
          <FormattedMessage id="404.title" defaultMessage="404: Not found">
            {(text) => <SEO title={text as string} />}
          </FormattedMessage>
          <h1>
            <FormattedMessage id="404.title" defaultMessage="404: Not found" />
          </h1>
          <p>
            <FormattedMessage
              id="404.message"
              defaultMessage="You just hit a route that doesn&#39;t exist... the sadness."
            />
          </p>
        </>
      )}
    </Layout>
  );
};

export default NotFoundPage;
