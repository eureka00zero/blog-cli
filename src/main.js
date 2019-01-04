let fistF = ()=>{
    console.log("heihei")//想要执行webpack，必须安装webpack-cli并指定生产模式
    //css-loader用来加载css style-loader把css转为js最终变为style贴到html上
    //url-loader把小于限制的文件转为base64，降低网络请求次数，
    //大于限制的一般交给file-loader自动添加文件名规则比如hash，然后将文件打包的配置的地址中
}