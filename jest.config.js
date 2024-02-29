const nextJest = require('next/jest.js'); // eslint-disable-line

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['./.next/', './node_modules/', 'mocks.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const jestconfig = async () => {
  const nextJestConfig = await createJestConfig(config)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      ...nextJestConfig.moduleNameMapper,
      '^.+\\.(svg)$': `${__dirname}/__mocks__/svg.js`,
    },
  };
};

module.exports = jestconfig;
