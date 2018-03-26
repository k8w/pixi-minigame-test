const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = process.argv.indexOf('--mode=production') > -1;

/** 获取本机IP地址 用于开发时设置资源路径 */
function getIPAddress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

module.exports = env => {
    let copyRes = [
        'game.json',
        'project.config.json'
    ];

    if (!env) {
        env = {};
    }

    if (!env.wxgame) {
        copyRes.push('index.html')
    }

    let config = {
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
                'DEV_SERVER_IP': JSON.stringify(getIPAddress()),
                'IS_WXGAME': JSON.stringify(!!env.wxgame)
            }),
            new CopyWebpackPlugin(copyRes)
        ],
        devServer: {
            contentBase: __dirname,
            host: '0.0.0.0',
            port: 8080,
            disableHostCheck: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    }

    if (env.wxgame) {
        config.devtool = 'none';
    }

    return config;
}