module.exports = function (api) {
  // Cache the returned value forever and don't call this function again.
  api.cache(true);

  const isTranslationsFlow = Boolean(process.env.TRANSLATIONS);
  if (isTranslationsFlow) {
    return {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        [
          'react-intl',
          {
            messagesDir: '.build/i18nExtractedMessages/',
          },
        ],
      ],
    };
  }

  return {
    presets: ['babel-preset-gatsby'],
  };

  /*
	const presets = [];
	const plugins = [
		[
			'react-intl',
			{
				messagesDir: '.i18nExtractedMessages/',
			},
		],
	];

	console.log('HERE');

	return {
		presets,
		plugins,
	};
	*/
};
