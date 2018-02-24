const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './vue.js',
    output: {
        filename: "vue.js",
        path: path.resolve(__dirname, 'dest'),
    },
    devServer: {
        port: 3332
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: __dirname + '/dest/index.html',
            title: "vue test",
            // template: "index.html",
            minify: {  //压缩HTML文件
                removeComments: true,  //移除HTML中的注释
                collapseWhitespace: true  //删除空白符与换行符
            }
        }),
    ]
}