const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


module.exports = {

    mode: 'development',
    optimization: {
        minimizer: [ new OptimizeCssAssetsPlugin() ]
    },
    entry: path.resolve(__dirname, 'src') + "/js/index.js",
    module: {


        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },

            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },

            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },

            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false,
                }


            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                        esModule: false,
                        name: 'assets/[name].[ext]',
                    }
            },

        ]

    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
        }),

        new CleanWebpackPlugin(),
    ]







}
