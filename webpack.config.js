const path = require('path')//path是node的中间件、用来进行文件路径的拼接可以生成绝对路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    entry:{
        app:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),//输出目录，当前目录下的dist
        filename:"js/[name].js"//输出文件名
    },
    module:{
        rules:[
            {
                test:/\.js$/,//test属性使用正则来匹配文件名，只要是require或者import的文件都会匹配到
                loader:"babel-loader",//匹配到的文件使用什么加载器来加载，加载器将文件封装为模块
                exclude:/node_modules/ //排除node_modules下的文件
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
                //依次使用以上loader加载css文件
                //css-loader用来加载css style-loader把css转为js最终变为style贴到html上
            },
            {
                test:/\.(png|jpe?j|gif|svg)(\?.*)?$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:'images/[name].[ext]?[hash]'
                }
                //图片大小小于limit的，会被改写为base64直接写入url中,降低网络请求次数，
                //否则会输出到dist的img目录下，name是文件原名，ext为后缀，
                //大于限制的一般交给file-loader自动添加文件名规则比如hash，然后将文件打包的配置的地址中
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:'fonts/[name].[ext]?[hash]'
                }
                //同上，这次匹配的是图标和字体文件
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    loaders:{
                        'less':[//lang属性对应的名称
                            'vue-style-loader',//首先给vue的样式loader过滤一遍
                            'css-loader',//css-loader,把css转js
                            'less-loader'//用less编译
                        ]
                    }
                }
              },
            {
                test:/\.less$/,
                use:[
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
        ]
    },
    resolve:{
        extensions:['.js','.vue','.json'],//自动解析带该后缀的文件，引入时不需要写后缀名
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            '@':path.resolve(__dirname,'./src'),//创建import或者require的别名，方便引入
        }
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
      ]
}