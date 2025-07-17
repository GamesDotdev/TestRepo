module.exports = {
  roots: [
    "<rootDir>/__tests__"
  ],
  testMatch: [
    "**/__tests__/**/*.test.js"
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