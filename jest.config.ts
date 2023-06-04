export default {
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: ["**/src/**/**/*.spec.ts?(x)"],

  moduleNameMapper: {
    "\\.module.(css)$": "<rootDir>/src/mocks/file-transform.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jsdom",

  transform: {
    "\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      { configFile: "./babel.testing.config.js" },
    ],
  },
};
