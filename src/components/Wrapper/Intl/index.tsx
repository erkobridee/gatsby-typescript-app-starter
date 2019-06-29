import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { selectLanguage } from 'state/ducks/language/selectors';
import { changeLanguage } from 'state/ducks/language/operations';

export const IntlWrapper: React.FunctionComponent = ({ children }) => {
	const dispatch = useDispatch();
	const language = useSelector(selectLanguage);
	const { locale } = language;

	React.useEffect(() => {
		console.log(language);
		if (!language.messages) {
			dispatch(changeLanguage());
		}
	}, []);

	return <IntlProvider {...{ key: locale, ...language }}>{children}</IntlProvider>;
};

export default IntlWrapper;
