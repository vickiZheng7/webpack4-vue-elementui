const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor1: {
                    chunks: "initial",
                    test: /element-ui/
                },
                vendor2: {
                    chunks: "initial",
                    test: /jquery|vue|vue-router/
                }
            }
        },
        runtimeChunk: {
            name: "manifest"
        }
    }
});