import * as React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const toJSON = (value: any) => JSON.stringify(value, null, 2);

const SecondPage: React.FunctionComponent = () => {
  const [message, setMessage] = React.useState('');

  const loadMessage = async () => {
    const newMessage = await import(
      /* webpackMode: "lazy", webpackChunkName: "hello-world" */ `assets/hello-world.json`
    );
    setMessage(toJSON(newMessage.default));
  };

  React.useEffect(() => {
    loadMessage();
  }, []);

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>
        <FormattedMessage id="page2.title" defaultMessage="Hi from the second page" />
      </h1>
      <p>
        <FormattedMessage id="page2.welcome" defaultMessage="Welcome to page 2" />
      </p>

      <pre>{message}</pre>

      <Link to="/">
        <FormattedMessage id="page2.link" defaultMessage="Go back to the homepage" />
      </Link>
    </Layout>
  );
};

export default SecondPage;
