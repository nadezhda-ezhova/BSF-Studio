module.exports = {
  "verbose": true,
  "coverageThreshold": {
    "./src": {
      "branches": 50,
      "functions": 50,
      "lines": 50,
      "statements": 50
    },
    "./initializers": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  "transform": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "setupFiles": [
    "./src/setupTests.js"
  ],
  "moduleFileExtensions": [
    "js"
  ],
  "modulePaths": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)"
  ]
}