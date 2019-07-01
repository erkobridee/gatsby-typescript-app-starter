const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
	messagesDirectory: '.i18nExtractedMessages',
	translationsDirectory: 'src/assets/languages/',
	whitelistsDirectory: 'src/assets/languages/whitelists/',
	languages: ['en', 'es', 'pt'],
});

console.log('\ntranslation runner done\n\n');
