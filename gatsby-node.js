const path = require('path');

// https://www.gatsbyjs.org/docs/add-custom-webpack-config/#absolute-imports
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		},
	});
};
