const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[id].[contenthash].js'
    },

    module: {
        rules:[
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_module/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
                },
                {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                  parse: toml.parse,
                },
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[id].[contenthash].css'
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    }
}
