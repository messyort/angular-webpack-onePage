var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var commonConfig = require('./webpack.common.js');
var path = require('path')
module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.ts$/, loader: [{ loader: 'ts-loader' }, 'angular2-template-loader'] }
        ]
    },       
    output: {
        path: '/dist',
        filename: '[name].bundle.js'
      },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }

})