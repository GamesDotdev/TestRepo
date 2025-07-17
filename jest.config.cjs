module.exports = {
  roots: [
    "<rootDir>/__tests__"
  ],
  testMatch: [
    "**/__tests__/**/*.test.js"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/e2e/"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/e2e/"
  ],
  transform: {
    "^.+\.js$": "babel-jest"
  },
  moduleFileExtensions: [
    "js",
    "json",
    "node"
  ]
};