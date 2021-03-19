module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.svg$': `<rootDir>/__mocks__/svgr-mock.js`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFilesAfterEnv: [`<rootDir>/jest-helpers/jest.setup.js`],
  setupFiles: [`<rootDir>/jest-helpers/loadershim.js`],
  cacheDirectory: `<rootDir>/.build/jest-temp/`,
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsConfig: `<rootDir>/jest-helpers/tsconfig.jest.json`,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!src/helpers/{cssVariableTransform,language,console}.ts',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  reporters: ['default', 'jest-junit'],
};
