
export default {
  roots:['<rootDir>/src'],
  collectCoverage: true,
  collectCovarageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
