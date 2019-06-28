import * as React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { selectLocale } from 'state/ducks/language/selectors';

export const IntlWrapper: React.FunctionComponent = ({ children }) => {
	const locale = useSelector(selectLocale);
	return <IntlProvider {...{ key: locale, locale }}>{children}</IntlProvider>;
};

export default IntlWrapper;
