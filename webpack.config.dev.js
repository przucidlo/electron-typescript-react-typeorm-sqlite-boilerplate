const path = require('path');
const webpack = require('webpack');
const rules = require('./webpack.rules');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rendererConfig = {
    mode: 'development',
    target: 'electron-renderer',
    entry: ['react-hot-loader/patch', './src/renderer/index.tsx'],
    module: {
        rules: [
            {
                test: /\.(j|t)s(x)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: true,
                    },
                },
            },
            ...rules,
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: false,
        overlay: true,
        inline: true,
        hot: true,
        watchOptions: {
            ignored: [path.resolve(__dirname, 'src', 'main/**.*')],
        },
        proxy: {
            '/': 'http://localhost:8080/renderer/',
        },
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.webpack', 'renderer'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            inject: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};

const mainConfig = {
    mode: 'development',
    target: 'electron-main',
    entry: './src/main/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            ...rules,
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    //Sqlite3 won't work without this line.
    externals: { sqlite3: 'commonjs sqlite3', mssql: '', mysql: '' },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.webpack', 'main'),
    },
};

module.exports = [rendererConfig, mainConfig];
