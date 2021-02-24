/**
 * @description Vue client
 * @link https://cli.vuejs.org/zh/config/#publicpath
 */
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/common/mixin.scss";
                      @import "@/assets/common/variables.scss";`
      }
    }
  },
  devServer: {
    port: 9527,
    open: true,
    proxy: {
      "/api": {
        target: "https://api.okms.cc", // 接口的域名
        // ws: true, // 是否启用websockets
        changOrigin: false, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
};
