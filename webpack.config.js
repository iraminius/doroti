const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/frontend/index.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "index.js"
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                }
            }
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }, {
            test: /\.eot$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "./res/fonts/[name].[ext]"
                }
            }
        }, {
            test: /\.(woff|woff2)$/,
            use: {
                loader: "url-loader",
                options: {
                    mimetype: "application/font-woff",
                    name: "./res/fonts/[name].[ext]"
                }
            }
        }, {
            test: /\.ttf$/,
            use: {
                loader: "url-loader",
                options: {
                    mimetype: "application/octet-stream",
                    name: "./res/fonts/[name].[ext]"
                }
            }
        }, {
            test: /\.(png|jpg|jpeg|svg|ico)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "./res/images/[name].[ext]"
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/frontend/index.html"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Popper: ["popper.js", "default"]
        })
    ]
}