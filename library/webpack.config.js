const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: {
    lodash: {
      root: '_',
      commonjs: 'lodash'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library',
    libraryTarget: 'umd'
  }
}