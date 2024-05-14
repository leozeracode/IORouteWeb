require('dotenv').config({ path: '.env.test' })

module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{ts,tsx}',
    '!<rootDir>/src/pages/**/*',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/index.tsx',
    '!<rootDir>/src/**/*.typings.ts',
    '!**/context/**',
    '!**/mocks/**',
    '!**/test/**',
    '!**/*.definitions.{ts,tsx}',
    '!**/*.styles.{ts,tsx}',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  }
}
