module.exports = {
  rootDir: '../',
  testMatch: ['<rootDir>/test/**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: '.coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
