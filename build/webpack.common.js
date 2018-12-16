const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const getPath = (file) => {
    return path.resolve(__dirname, file);
};

module.exports = {
    //基础目录，用于配置中解析入口起点和loader
    context: getPath("../"),
    entry: {
        vendor: "@babel/polyfill",
        main: "./src/main.js"
    },
    output: {
        filename: "[name].[hash].js",
        path: getPath("../dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //删除dist文件夹
        new CleanWebpackPlugin(getPath("../dist"), {
            //因为dist文件夹不在当前目录下，为了文件安全，无法直接删除
            //所以应该重新指定根路径root, 或者修改allowExternal
            root: getPath("../"),
            //允许插件删除当前目录外的其他文件
            //allowExternal: true,
            //打印日志到控制台
            verbose: true
        }),
        //生成html文件
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        //自动加载模块，不用到处import
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            "~": getPath("../src"),
            //https://www.cnblogs.com/xiangxinhouse/p/8447507.html
            'vue$': 'vue/dist/vue.js'
        }
    }
};