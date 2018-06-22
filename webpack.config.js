const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './app/index.jsx'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.compiled.js'
    },

    resolve: {
        alias: {
            './ajax-loader.gif': path.resolve(
                __dirname,
                'node_modules/slick-carousel/slick'
            )
        }
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                options: {
                    babelrc: false,
                    presets: [
                        [
                            '@babel/env',
                            {
                                targets: {
                                    browsers: ['last 2 versions', 'not IE <= 9']
                                }
                            }
                        ],
                        '@babel/preset-react',
                        [
                            '@babel/stage-0',
                            {
                                useBuiltIns: true,
                                decoratorsLegacy: true
                            }
                        ]
                    ],
                    plugins: [
                        ['@babel/transform-modules-commonjs', {}],
                        ['@babel/plugin-proposal-class-properties'],
                        ['@babel/plugin-proposal-object-rest-spread']
                    ]
                },
                loader: 'babel-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{ from: 'images/**/*' }]),
        new WriteFilePlugin({
            // exclude hot-update files
            test: /^(?!.*(hot)).*/
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};
