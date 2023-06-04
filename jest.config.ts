/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: ["**/src/**/**/*.spec.ts?(x)"],

  // moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.module.(css)$": "<rootDir>/src/mocks/file-transform.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",

  transform: {
    "\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      { configFile: "./babel.testing.config.js" },
    ],
  },
};
