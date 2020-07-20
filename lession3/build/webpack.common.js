const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  "module": {
    rules: [ 
      { 
        test: /\.js$/, exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      { 
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          limit: 204800
        }
      }
    },{
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _join: ['lodash', 'join']
    })
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist')
  }
}