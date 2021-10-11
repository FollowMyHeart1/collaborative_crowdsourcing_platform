module.exports = {
    // 这里是脚手架的配置,
    // 其中如果想修改 webpack 配置
    publicPath:'./',
    configureWebpack:{
        // 声明在 configureWebpack 属性对象里面即可
        // 如果没有这个需要, 这个文件可以不存在
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("autoprefixer")({
                        // 配置使用 autoprefixer
                        overrideBrowserslist: ["last 15 versions"]
                    }),
                    require("postcss-pxtorem")({
                        rootValue: 100, // 换算的基数
                        propList: ["*"],
                        //exclude: /node_modules/  //配置无需转换
                    })
                ]
            }
        }
    },
    lintOnSave: false,
    pwa: {

        iconPaths: {

            favicon32: 'favicon.ico',

            favicon16: 'favicon.ico',

            appleTouchIcon: 'favicon.ico',

            maskIcon: 'favicon.ico',

            msTileImage: 'favicon.ico'

        }

    },
/*
    devServer: {
        proxy: {
            '/api': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'http://cgo.culturecompute.com:9999/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
*/

}