const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextWebpackPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        },
        {
            test: /.css$/,
            use: extractPlugin.extract({
                use: ['css-loader']
            })
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            use: ['url-loader']
        }
        ]
    },

    plugins: [
        extractPlugin,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};