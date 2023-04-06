module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
}

