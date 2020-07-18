const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {
  merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common.js')

const devConfig = {
  mode: "development",
  devtool: 'eveal-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    hotOnly: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig)