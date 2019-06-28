import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'state';

const ReduxWrapper: React.FunctionComponent = ({ children }) => {
	return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default ReduxWrapper;
