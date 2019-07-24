const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';
const dotenvPath = path.resolve(__dirname, `.env.${activeEnv}`);

//www.gatsbyjs.org/docs/environment-variables/
const dotenvConfig = dotenv.config({
	path: dotenvPath,
});

if (dotenvConfig.error) {
	console.log(`\n\n\ndotenv file not found: ${dotenvPath}\n\n\n`);
}

exports.onCreateWebpackConfig = ({ actions }) => {
	// make sure to have the process.env configs from the .env file available on the /src/* files
	const plugins = [];
	const { parsed: dotenvParsed } = dotenvConfig;
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
