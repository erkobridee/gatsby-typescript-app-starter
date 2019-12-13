const path = require('path');
const dotenv = require('dotenv');

const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';
const dotenvPath = path.resolve(__dirname, '..', `.env.${activeEnv}`);

//www.gatsbyjs.org/docs/environment-variables/
const dotenvConfig = dotenv.config({
	path: dotenvPath,
});

/*
if (dotenvConfig.error) {
	console.log(`\n\n\ndotenv file not found: '${dotenvPath}'\n\n\n`);
}
*/

const { parsed: dotenvParsed } = dotenvConfig;

if (dotenvParsed) {
	console.log(`\n\ndotenv file '${dotenvPath}' loaded\n${JSON.stringify(dotenvParsed, null, 2)}\n\n`);
}

module.exports = {
	activeEnv,
	dotenvParsed,
};
