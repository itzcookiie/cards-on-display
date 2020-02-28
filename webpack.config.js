const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 3000,
        publicPath: '/dist/',
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/,
                use: ['style-loader', MiniCSSExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'style.css'
        })
    ]
}