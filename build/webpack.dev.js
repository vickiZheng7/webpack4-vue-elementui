const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: "0.0.0.0",
        port: 9000
    }
});