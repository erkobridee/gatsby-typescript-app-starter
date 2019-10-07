import storage from 'redux-persist/lib/storage';

import language from './language/persistTransform';

const persistConfig = {
	key: 'states',
	storage,
	transforms: [language.transform],
	whitelist: [language.name],
};

export default persistConfig;
