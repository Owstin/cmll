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
            test: /.scss$/,
            use: extractPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        }]
    },

    plugins: [
        extractPlugin,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};