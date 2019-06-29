//----------------------------------------------------------------------------//
// Opting out of the "[React Intl] Missing message" in developement #465
// https://github.com/formatjs/react-intl/issues/465#issuecomment-369566628

// Disable missing translation message as translations will be added later.
// We can add a toggle for this later when we have most translations.
/*
// eslint-disable-next-line
const consoleError = console.error.bind(console);
// eslint-disable-next-line
console.error = (message: any, ...args: any[]) => {
	if (typeof message === 'string' && message.startsWith('[React Intl] Missing message:')) {
		return;
	}
	consoleError(message, ...args);
};
*/
//----------------------------------------------------------------------------//

// redefine the console object
if (process.env.NODE_ENV === 'production') {
	console.log = () => undefined;
}

export default console;
