const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

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
                test: /\.less$/,
                loader: ["css-loader", "style-loader", "postcss-loader", "less-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 10000
                }
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
        })
    ]
};