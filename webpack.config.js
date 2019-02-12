const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.tsx'],
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new TSLintPlugin({
            files: ['./src/**/*.ts'],
            config: './tslint.json',
            waitForLinting: true,
            warningsAsError: true
        })
    ]
};