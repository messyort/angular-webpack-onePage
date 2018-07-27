var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var commonConfig = require('./webpack.common.js');
var paath = require('path')
module.exports = webpackMerge(commonConfig,{
    
})