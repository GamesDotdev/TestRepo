module.exports = {
  testMatch: [
    "**/__tests__/**/*.test.js",
    "!**/e2e/**/*.test.js"
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