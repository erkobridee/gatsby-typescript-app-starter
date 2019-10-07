import { createTransform } from 'redux-persist';

import { ILanguageState } from './definitions';
import { initialState } from './reducers';

const serialize = (/* inboundState */ { locale }: ILanguageState) => {
	return { locale };
};

const unserialize = (outboundState: any) => {
	let loadedState = {};
	if ('locale' in outboundState) {
		loadedState = {
			locale: outboundState.locale,
		};
	}
	return { ...initialState, ...loadedState };
};

const name = 'language';
const transform = createTransform(serialize, unserialize, { whitelist: [name] });

export default {
	name,
	transform,
};
