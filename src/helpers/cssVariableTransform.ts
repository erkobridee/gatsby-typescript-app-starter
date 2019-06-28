import cssVars from 'css-vars-ponyfill';
import { isBrowser, hasCssVariablesSupport } from './check';

export const cssVariableTransform = () =>
	new Promise((resolve, reject) => {
		if (!isBrowser || hasCssVariablesSupport) {
			console.log('cssVariableTransform ', { isBrowser, hasCssVariablesSupport });
			return resolve();
		}

		console.log('cssVariableTransform start');
		cssVars({
			onWarning: message => console.log('cssVariableTransform warning: ', message),
			onError: (message, elm, xhr, url) => {
				console.log('cssVariableTransform error: ', { message, elm, xhr, url });
				reject();
			},
			onComplete: () => {
				console.log('cssVariableTransform completed');
				resolve();
			},
		});
	});

export default cssVariableTransform;
