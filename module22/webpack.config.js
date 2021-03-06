const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3001,
        host: "0.0.0.0",
        stats: {
            children: false,
            maxModules: 0
           }
      },
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "faq.html",
            template: "./src/faq.pug"
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                }
            }, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    }
};