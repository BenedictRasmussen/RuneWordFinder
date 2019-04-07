const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const extractCSS = new ExtractTextPlugin('allstyles.css');

module.exports = {

    entry: { 'main': './runewordFinder/source/jsx/app.jsx' },
    output: {
        path: path.resolve(__dirname, './runewordFinder/static/dist'),
        filename: 'index.js',
        publicPath: 'dist/'
    },

    mode: 'development',

    plugins: [
        extractCSS,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader', options: {
                        presets:
                            ['@babel/preset-react', '@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            }
        ]
    },

    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin()
    //     ]
    // }
};
