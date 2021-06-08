const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[id].[contenthash].js'
    },

    module: {
        rules:[
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_module/,
                use: ['babel-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}