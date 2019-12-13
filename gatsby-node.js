const path = require('path');
const webpack = require('webpack');

const { dotenvParsed } = require('./scripts/load-dotenv-config');

exports.onCreateWebpackConfig = ({ actions }) => {
	// make sure to have the process.env configs from the .env file available on the /src/* files
	const plugins = [];
	if (dotenvParsed) {
		const webpackDefinePluginConfig = {};
		Object.keys(dotenvParsed).forEach(key => {
			webpackDefinePluginConfig[`process.env.${key}`] = JSON.stringify(process.env[key]);
		});
		plugins.push(new webpack.DefinePlugin(webpackDefinePluginConfig));
	}

	actions.setWebpackConfig({
		resolve: {
			// https://www.gatsbyjs.org/docs/add-custom-webpack-config/#absolute-imports
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		},
		plugins: plugins,
	});
};
