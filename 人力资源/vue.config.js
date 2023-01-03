const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false , // 去掉Eslink 警告的
  publicPath:"",   // 设置打包相对路径 上线用的
  pwa:{             // 设置网站图标
    // iconPaths:{
    //   favicon32:"favicon.ico",
    //   favicon16:"favicon.ico",
    //   appleTouchIcon:"favicon.ico",
    //   maskIcon:"favicon.ico",
    //   msTileImage:"favicon.icon"
    // }
  },
  devServer:{         //服务器配置
    host:"localhost", //0.0.0.0
    port:9000,        //端口号
    open:false,        // 打开浏览器(每次启动自动打开浏览器)
    hot:true,         //自动更新
  }

})
