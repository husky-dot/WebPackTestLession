const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  mode: "production",
  entry: {
    main: './src/index.js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    hotOnly: true
  },
  "module": {
    rules: [ 
      { 
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
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
    }, {
      test: /\.css$/,
      use: [
        'style-loader', 
        'css-loader',
        'postcss-loader'
      ]
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
    new webpack.HotModuleReplacementPlugin() 
  ],
  // optimization: {
  //   usedExports: true
  // }
}