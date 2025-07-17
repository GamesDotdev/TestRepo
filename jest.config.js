export default {
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