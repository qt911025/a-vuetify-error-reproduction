const path = require('path')

module.exports = {
  name: 'client',
  displayName: 'Client Unit and Fragment Test',
  rootDir: path.join(__dirname, '.'),
  roots: ['<rootDir>/'],
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  // transformIgnorePatterns: [
  //   '/node_modules/(?!vee-validate/dist/rules)',
  // ],
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
}
