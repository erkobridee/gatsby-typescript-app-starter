import * as React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage, defineMessages, injectIntl, InjectedIntlProps } from 'react-intl';
import { changeLanguage } from 'store/state/language/operations';
import { selectLocale } from 'store/state/language/selectors';

import './_styles.scss';

const translations = defineMessages({
	en: { id: 'language.selector.option.english', defaultMessage: 'English' },
	es: { id: 'language.selector.option.spanish', defaultMessage: 'Spanish' },
	pt: { id: 'language.selector.option.portuguese', defaultMessage: 'Portuguese' },
});

interface ILanguageSelectorProps extends InjectedIntlProps {
	className?: string;
	label?: React.ReactNode;
}

const LanguageSelector: React.FunctionComponent<ILanguageSelectorProps> = ({
	intl,
	className,
	label = <FormattedMessage id="language.selector.label" defaultMessage="Select another available language" />,
}) => {
	const dispatch = useDispatch();
	const locale = useSelector(selectLocale);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(changeLanguage(event.target.value));
	};

	return (
		<div className={cn('languageselector', className)}>
			{label && <div className="languageselector__label">{label}</div>}
			<div className="languageselector__selectcontainer">
				<select value={locale} onChange={handleChange} className="languageselector__select">
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
		</div>
	);
};

export default injectIntl(LanguageSelector);
