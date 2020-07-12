const path = require('path')

module.exports = {
  entry: './src/index.js',
  "mode": "production",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  "module": {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          limit: 20480
        }
      }
    },{
      test: /\.scss$/,
      use: [
        'style-loader', 
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'sass-loader', 
        'postcss-loader'
      ]
    },{
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader'
      }
    }]
  }
}