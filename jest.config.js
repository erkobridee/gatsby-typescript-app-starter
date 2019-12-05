// TODO: review the coverage support

// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig');

// https://kulshekhar.github.io/ts-jest/user/config/#options
module.exports = {
	preset: 'ts-jest',
	transform: {
		// '^.+\\.tsx?$': 'ts-jest',
		'^.+\\.jsx?$': `<rootDir>/jest-helpers/jest-preprocess.js`,
	},
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
		'.+\\.(js,jsx,ts,tsx)$': `<rootDir>/$1`,
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
	transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
	globals: {
		__PATH_PREFIX__: ``,
	},
	testURL: `http://localhost`,
	setupFilesAfterEnv: [`<rootDir>/jest-helpers/jest.setup.js`],
	setupFiles: [`<rootDir>/jest-helpers/loadershim.js`],
	cacheDirectory: `<rootDir>/.build/jest-temp/`,
	// collectCoverage: true,
	// collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}', '!**/node_modules/**', '!**/vendor/**'],
};
