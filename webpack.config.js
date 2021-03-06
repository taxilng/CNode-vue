const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve (dir) {
    return path.join(__dirname, '/', dir)
}
module.exports = {
    entry: __dirname + "/src/main.js",//已多次提及的唯一入口文件
    output: {
        //path: __dirname + "/public",//打包后的文件存放的地方
        publicPath: '/',
        path: __dirname + "/dist",
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    },
    devtool: 'source-map', //线上打包调试用
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },
    resolve:{
        extensions: ['.js','.vue','.json'],
        alias:{
            'vue$': 'vue/dist/vue.esm.js',
            '@':resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    'scss': 'style-loader!css-loader!sass-loader'
                }
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "postcss-loader"
                    }

                ]
            },
            {
                test: /\.(scss|sass)$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        // new webpack.BannerPlugin('版权所有,翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//防止缓存
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]
}
