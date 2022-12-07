const { defineConfig } = require('@vue/cli-service')

console.log(typeof process.env.VUE_APP_MOCK_ENABLE, 'env')
let target = process.env.VUE_APP_MOCK_ENABLE === 'true' ? 'http://localhost:8090' : process.env.VUE_APP_CONSOLE_URL
console.log(target)
module.exports = defineConfig({
  // transpileDependencies: true,
  // lintOnSave: false
  lintOnSave: false,
  /**根目录 */
  publicPath: './',
  /**默认关闭生产环境的资源 */
  productionSourceMap: true,
  /**打包时候的文件夹名称 */
  outputDir: 'dist',
  /**防止打包时静态资源文件生成的存放位置  js css img*/
  assetsDir: 'assets',
  /**本地的环境代理配置 */
  devServer: {
    /**端口号 */
    port: 9999,
    /**开发运行时域名，设置成'0.0.0.0'在同一个局域网下，如果你的项目在运行，同时可以通过你的http://ip:port/...访问你的项目 */
    host: 'localhost',
    /**默认是否打开浏览器 */
    open: false,
    /**是否启用https */
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        /**默认开启代理模式 */
        changeeOrigin: true,
        /**如果是http接口，需要配置该参数 */
        secure: false,
        /**代理的地址 */
        target,
        /**路径的重命名 */
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
  // transpileDependencies: true,
  // lintOnSave: false
})
