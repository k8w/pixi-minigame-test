const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = process.argv.indexOf('--mode=production') > -1;

module.exports = {
    entry: {
        game: './game.ts'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.ts$/, use: ['ts-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'DEBUG': isProduction ? 'false' : 'true',
            'IS_WX_MINIGAME': 'true'
        }),
        new CopyWebpackPlugin([
            'game.json',
            'project.config.json'
        ])
    ],
    devServer: {
        contentBase: __dirname,
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true
    },
    devtool: isProduction ? 'none' : 'source-map',
    // target: 'electron'
}