const postcssPresetEnv = require('postcss-preset-env');

const gatsbyConfig = {
	siteMetadata: {
		title: `Gatsby TypeScript Application Starter`,
		description: `Kick off your next, great Gatsby typescript application project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@erkobridee`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-typescript-app-starter`,
				short_name: `ts-starter`,
				start_url: `.`,
				background_color: `#ffffff`,
				theme_color: `#6d2f9c`,
				display: `minimal-ui`,
				icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 10,
				postCssPlugins: [postcssPresetEnv()],
			},
		},
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-create-client-paths`,
			options: { prefixes: [`/photos/*`] },
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		// {
		// 	resolve: `gatsby-plugin-offline`,
		// 	options: {
		// 		modifyUrlPrefix: {
		// 			'/': `${pathPrefix}/`,
		// 		},
		// 	},
		// },
	],
};

const pkg = require('./package.json');
const pathPrefix = require('./scripts/get-path-prefix')(pkg);
if (pathPrefix) {
	gatsbyConfig.pathPrefix = pathPrefix;

	gatsbyConfig.plugins.push({
		resolve: `gatsby-plugin-offline`,
		options: {
			modifyUrlPrefix: {
				'/': `${pathPrefix}/`,
			},
		},
	});
} else {
	gatsbyConfig.plugins.push(`gatsby-plugin-offline`);
}

module.exports = gatsbyConfig;
