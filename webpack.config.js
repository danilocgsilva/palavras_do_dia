"use strict"

const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve('src', 'start'),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'web', 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'resources', 'images'),
                    to: path.resolve(__dirname, 'web', 'images')
                }
            ]
        })
    ]
};