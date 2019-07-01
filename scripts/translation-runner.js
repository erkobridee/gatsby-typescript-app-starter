const { readFileSync } = require('fs');
const {
	default: manageTranslations,
	readMessageFiles,
	getDefaultMessages,
} = require('react-intl-translations-manager');

const messagesDirectory = '.i18nExtractedMessages';
const defaultLanguage = 'en';

const readFile = filename => {
	try {
		return readFileSync(filename);
	} catch (error) {
		return undefined;
	}
};

manageTranslations({
	messagesDirectory: messagesDirectory,
	translationsDirectory: 'src/assets/languages/',
	whitelistsDirectory: 'src/assets/languages/whitelists/',
	languages: [defaultLanguage, 'es', 'pt'],
	overrideCoreMethods: {
		// based on:
		// https://github.com/GertjanReynaert/react-intl-translations-manager/issues/76#issuecomment-283186721
		provideWhitelistFile: langResults => {
			if (langResults.lang === defaultLanguage) {
				const messageFiles = readMessageFiles(messagesDirectory);
				const messages = getDefaultMessages(messageFiles).messages;
				return Object.keys(messages);
			}
			const jsonFile = readFile(langResults.whitelistFilepath);
			return jsonFile ? JSON.parse(jsonFile) : undefined;
		},
	},
});

console.log('\ntranslation runner done\n\n');
