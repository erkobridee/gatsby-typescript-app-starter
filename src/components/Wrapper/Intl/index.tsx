import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { selectLanguage } from 'store/state/language/selectors';
import { changeLanguage } from 'store/state/language/operations';

export const IntlWrapper: React.FunctionComponent = ({ children }) => {
	const dispatch = useDispatch();
	const language = useSelector(selectLanguage);
	const { locale } = language;

	React.useEffect(() => {
		if (!language.messages) {
			dispatch(changeLanguage(locale));
		}
	}, []);

	return <IntlProvider {...{ key: locale, ...language }}>{children}</IntlProvider>;
};

export default IntlWrapper;
