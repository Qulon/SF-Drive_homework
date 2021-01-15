const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png)$/,
                use: {
                 loader: 'url-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "faq.html",
            template: "./src/faq.html",
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html"
        }),
    ],
}