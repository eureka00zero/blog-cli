const path = require('path')

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),//输出目录，当前目录下的dist
        filename:"js/[name].js"//输出文件名
    }
}