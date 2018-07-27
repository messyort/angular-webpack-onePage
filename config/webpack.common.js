var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var commonConfig = require('./webpack.common.js');
var path = require('path');
var appConfig = require('./app.config.json');
const definAppCOnfiguration = {};
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor':    './src/vendor.ts',
        'app':       './src/main.ts',
      },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader?sourceMap'
            })
        }, {
            test: /\.css$/,
            loader: 'raw-loader'
        }]
    },
    externals : {
        utils: 'utils'
    }
}