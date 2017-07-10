var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: { all: ['./src/index.js', './src/styles.css']},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },{

                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: "css-loader"
                })

            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            "assets": {
                "client" : "bundle.js",
                "style"  : "bundle.css",
            }
        }),
        new ExtractTextPlugin("styles.css"),
    ],
    watch: true
};