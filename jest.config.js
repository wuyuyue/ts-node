module.exports = {
  displayName: 'Unit Tests',
  testRegex: '(/tests/.*.(test|spec))\\.(ts?|js?)$',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
}
