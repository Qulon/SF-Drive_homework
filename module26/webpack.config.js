const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
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
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|svg|jpg)$/i,
                use: ['file-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist',
                            esModule: false
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin( {
            template: "./src/index.html"
        } )
    ],
}