const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
	messagesDirectory: '.i18nExtractedMessages',
	translationsDirectory: 'src/assets/languages/',
	languages: ['en', 'es', 'pt'],
});

console.log('\ntranslation runner done\n\n');
