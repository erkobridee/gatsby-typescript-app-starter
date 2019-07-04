import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage, defineMessages, injectIntl, InjectedIntlProps } from 'react-intl';
import { changeLanguage } from 'store/ducks/language/operations';
import { selectLocale } from 'store/ducks/language/selectors';

const translations = defineMessages({
	en: { id: 'language.selector.option.english', defaultMessage: 'English' },
	es: { id: 'language.selector.option.spanish', defaultMessage: 'Spanish' },
	pt: { id: 'language.selector.option.portuguese', defaultMessage: 'Portuguese' },
});

const LanguageSelector: React.FunctionComponent<InjectedIntlProps> = ({ intl }) => {
	const dispatch = useDispatch();
	const locale = useSelector(selectLocale);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(changeLanguage(event.target.value));
	};

	return (
		<div>
			<FormattedMessage id="language.selector.label" defaultMessage="Select another available language" />
			{': '}
			<select value={locale} onChange={handleChange}>
				{Object.keys(translations).map((key, index) => {
					return (
						<option key={index} value={key}>
							{intl.formatMessage((translations as any)[key])}
						</option>
					);
				})}
				}
			</select>
		</div>
	);
};

export default injectIntl(LanguageSelector);
