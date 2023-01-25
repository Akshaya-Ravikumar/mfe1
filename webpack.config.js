const HtmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
    mode: 'development',
    devServer: {
        port: '8081'
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'mfe1',
            filename: 'remoteEntry.js',
            exposes: {
                './Mfe1Index': './src/index'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};